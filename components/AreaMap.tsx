"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { fullAddress, homeCoords, type areaPlaces } from "@/lib/property";
import { formatDrive, loadDriveRoute, type DriveInfo } from "@/lib/routing";

type Place = (typeof areaPlaces)[number];
type Leaflet = typeof import("leaflet");

type Props = {
  places: Place[];
  selected: string;
  drives: Record<string, DriveInfo>;
  onSelect: (name: string) => void;
};

function pinIcon(L: Leaflet, kind: "home" | "place" | "active", label: string) {
  const size = kind === "home" ? 40 : 32;
  return L.divIcon({
    className: "map-pin-wrap",
    html: `<div class="map-pin map-pin-${kind}" title="${label}"><span>${kind === "home" ? "80" : label}</span></div>`,
    iconSize: [size, Math.round(size * 1.25)],
    iconAnchor: [size / 2, Math.round(size * 1.2)],
    popupAnchor: [0, -size],
  });
}

function driveLabel(place: Place, drives: Record<string, DriveInfo>) {
  const info = drives[place.name];
  return info ? formatDrive(info) : "Drive from 80 Carlin Rd";
}

export function AreaMap({ places, selected, drives, onSelect }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const onSelectRef = useRef(onSelect);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const pinsRef = useRef<import("leaflet").LayerGroup | null>(null);
  const routeRef = useRef<import("leaflet").LayerGroup | null>(null);
  const leafletRef = useRef<Leaflet | null>(null);
  const placesRef = useRef(places);
  const selectedRef = useRef(selected);
  const drivesRef = useRef(drives);

  onSelectRef.current = onSelect;
  placesRef.current = places;
  selectedRef.current = selected;
  drivesRef.current = drives;

  useEffect(() => {
    let cancelled = false;

    void import("leaflet").then((mod) => {
      if (cancelled || !host.current) return;
      const L = mod.default;
      leafletRef.current = L;

      const map = L.map(host.current, {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      }).setView([homeCoords.lat, homeCoords.lng], 12);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      L.marker([homeCoords.lat, homeCoords.lng], {
        icon: pinIcon(L, "home", "80 Carlin Rd"),
        zIndexOffset: 400,
      })
        .bindPopup(`<strong>80 Carlin Rd</strong><br/>Home base`)
        .addTo(map);

      const pins = L.layerGroup().addTo(map);
      const route = L.layerGroup().addTo(map);
      mapRef.current = map;
      pinsRef.current = pins;
      routeRef.current = route;
      drawPins(L, pins, placesRef.current, selectedRef.current, drivesRef.current);
      map.invalidateSize();
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      pinsRef.current = null;
      routeRef.current = null;
    };
  }, []);

  useEffect(() => {
    const L = leafletRef.current;
    const pins = pinsRef.current;
    if (!L || !pins) return;
    drawPins(L, pins, places, selected, drives);
  }, [places, selected, drives]);

  useEffect(() => {
    const L = leafletRef.current;
    const map = mapRef.current;
    const routeLayer = routeRef.current;
    if (!L || !map || !routeLayer) return;

    routeLayer.clearLayers();
    const selectedPlace = places.find((place) => place.name === selected);
    if (!selectedPlace) {
      const bounds = L.latLngBounds([[homeCoords.lat, homeCoords.lng]]);
      for (const place of places) bounds.extend([place.lat, place.lng]);
      map.fitBounds(bounds, { padding: [36, 36], maxZoom: 12 });
      return;
    }

    let cancelled = false;
    void loadDriveRoute(selectedPlace)
      .then((route) => {
        if (cancelled || !routeLayer || !mapRef.current) return;
        const line = L.polyline(route.path, {
          color: "#c2410c",
          weight: 5,
          opacity: 0.92,
        }).addTo(routeLayer);
        map.flyToBounds(line.getBounds(), { padding: [48, 48], maxZoom: 13, duration: 0.7 });
      })
      .catch(() => {
        if (cancelled || !routeLayer || !mapRef.current) return;
        L.polyline(
          [
            [homeCoords.lat, homeCoords.lng],
            [selectedPlace.lat, selectedPlace.lng],
          ],
          { color: "#c2410c", weight: 4, opacity: 0.7, dashArray: "6 8" },
        ).addTo(routeLayer);
        map.flyToBounds(
          [
            [homeCoords.lat, homeCoords.lng],
            [selectedPlace.lat, selectedPlace.lng],
          ],
          { padding: [64, 64], maxZoom: 13, duration: 0.7 },
        );
      });

    return () => {
      cancelled = true;
    };
  }, [places, selected]);

  function drawPins(
    L: Leaflet,
    pins: import("leaflet").LayerGroup,
    nextPlaces: Place[],
    nextSelected: string,
    nextDrives: Record<string, DriveInfo>,
  ) {
    pins.clearLayers();
    const plotted = new Set<string>();

    nextPlaces.forEach((place, index) => {
      const key = `${place.lat.toFixed(5)},${place.lng.toFixed(5)}`;
      if (plotted.has(key) && place.name !== nextSelected) return;
      plotted.add(key);

      const active = place.name === nextSelected;
      const marker = L.marker([place.lat, place.lng], {
        icon: pinIcon(L, active ? "active" : "place", String(index + 1)),
        zIndexOffset: active ? 300 : 200,
      })
        .bindPopup(`<strong>${place.name}</strong><br/>${driveLabel(place, nextDrives)}`)
        .on("click", () => onSelectRef.current(place.name));
      marker.addTo(pins);
      if (active) marker.openPopup();
    });
  }

  return <div ref={host} className="area-map h-[340px] w-full sm:h-[460px]" />;
}

export function directionsLink(destination: string) {
  const origin = encodeURIComponent(fullAddress);
  const dest = encodeURIComponent(destination);
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}`;
}
