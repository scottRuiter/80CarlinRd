import { areaPlaces, homeCoords } from "@/lib/property";

export type DriveInfo = {
  miles: number;
  minutes: number;
};

export type DriveRoute = DriveInfo & {
  path: [number, number][];
};

const TABLE_KEY = "80carlin-drive-table-v1";

function formatMiles(miles: number) {
  return miles < 10 ? `${miles.toFixed(1)} miles` : `${Math.round(miles)} miles`;
}

export function formatDrive(info: DriveInfo) {
  const minutes = Math.max(1, Math.round(info.minutes));
  return `${minutes} min drive · ${formatMiles(info.miles)}`;
}

function toInfo(meters: number, seconds: number): DriveInfo {
  return {
    miles: meters / 1609.34,
    minutes: seconds / 60,
  };
}

export async function loadDriveTable(
  places: typeof areaPlaces,
): Promise<Record<string, DriveInfo>> {
  if (typeof sessionStorage !== "undefined") {
    const cached = sessionStorage.getItem(TABLE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached) as Record<string, DriveInfo>;
      } catch {
        sessionStorage.removeItem(TABLE_KEY);
      }
    }
  }

  const coords = [
    `${homeCoords.lng},${homeCoords.lat}`,
    ...places.map((place) => `${place.lng},${place.lat}`),
  ].join(";");

  const response = await fetch(
    `https://router.project-osrm.org/table/v1/driving/${coords}?sources=0&annotations=duration,distance`,
  );
  if (!response.ok) throw new Error("Drive table failed");

  const data = (await response.json()) as {
    code?: string;
    distances?: number[][];
    durations?: number[][];
  };
  if (data.code !== "Ok" || !data.distances?.[0] || !data.durations?.[0]) {
    throw new Error("Drive table empty");
  }

  const table: Record<string, DriveInfo> = {};
  places.forEach((place, index) => {
    const meters = data.distances![0][index + 1];
    const seconds = data.durations![0][index + 1];
    if (Number.isFinite(meters) && Number.isFinite(seconds)) {
      table[place.name] = toInfo(meters, seconds);
    }
  });

  if (typeof sessionStorage !== "undefined") {
    sessionStorage.setItem(TABLE_KEY, JSON.stringify(table));
  }
  return table;
}

export async function loadDriveRoute(place: {
  lat: number;
  lng: number;
}): Promise<DriveRoute> {
  const response = await fetch(
    `https://router.project-osrm.org/route/v1/driving/${homeCoords.lng},${homeCoords.lat};${place.lng},${place.lat}?overview=full&geometries=geojson`,
  );
  if (!response.ok) throw new Error("Drive route failed");

  const data = (await response.json()) as {
    code?: string;
    routes?: {
      distance: number;
      duration: number;
      geometry: { coordinates: [number, number][] };
    }[];
  };
  const route = data.routes?.[0];
  if (data.code !== "Ok" || !route) throw new Error("Drive route empty");

  return {
    ...toInfo(route.distance, route.duration),
    path: route.geometry.coordinates.map(([lng, lat]) => [lat, lng]),
  };
}
