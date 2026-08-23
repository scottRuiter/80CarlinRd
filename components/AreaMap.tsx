"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { fullAddress, homeCoords, type areaPlaces } from "@/lib/property";

type Place = (typeof areaPlaces)[number];

type Props = {
  places: Place[];
  selected: string;
  onSelect: (query: string) => void;
};

function milesBetween(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 3958.8 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

export function AreaMap({ places, selected, onSelect }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const mapRef = useRef<{
    map: import("leaflet").Map;
    layer: import("leaflet").LayerGroup;
    L: typeof import("leaflet");
  } | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = host.current;
    if (!node) return;
    let cancelled = false;

    void import("leaflet").then((leaflet) => {
      if (cancelled || !host.current) return;
      const L = leaflet.default;

      const map = L.map(host.current, {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      }).setView([homeCoords.lat, homeCoords.lng], 12);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      const layer = L.layerGroup().addTo(map);
      mapRef.current = { map, layer, L };
      map.invalidateSize();
      setReady(true);
    });

    return () => {
      cancelled = true;
      setReady(false);
      mapRef.current?.map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const current = mapRef.current;
    if (!current) return;

    const { map, layer, L } = current;
    layer.clearLayers();

    const homeIcon = L.divIcon({
      className: "map-pin-wrap",
      html: `<div class="map-pin map-pin-home" title="${fullAddress}"><span>80</span></div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });

    L.marker([homeCoords.lat, homeCoords.lng], { icon: homeIcon, zIndexOffset: 400 })
      .bindPopup(`<strong>80 Carlin Rd</strong><br/>Home base`)
      .addTo(layer);

    const points: [number, number][] = [[homeCoords.lat, homeCoords.lng]];
    let selectedPlace: Place | undefined;

    const plotted = new Set<string>();
    for (const place of places) {
      const active = selected === place.name;
      if (active) selectedPlace = place;
      points.push([place.lat, place.lng]);

      const key = `${place.lat.toFixed(5)},${place.lng.toFixed(5)}`;
      if (plotted.has(key) && !active) continue;
      plotted.add(key);

      const miles = milesBetween(homeCoords, place);
      const icon = L.divIcon({
        className: "map-pin-wrap",
        html: `<div class="map-pin ${active ? "map-pin-active" : "map-pin-place"}" title="${place.name}"></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });

      L.marker([place.lat, place.lng], { icon, zIndexOffset: active ? 300 : 200 })
        .bindPopup(
          `<strong>${place.name}</strong><br/>About ${miles < 10 ? miles.toFixed(1) : Math.round(miles)} miles from 80 Carlin Rd`,
        )
        .on("click", () => onSelect(place.name))
        .addTo(layer);
    }

    if (selectedPlace) {
      L.polyline(
        [
          [homeCoords.lat, homeCoords.lng],
          [selectedPlace.lat, selectedPlace.lng],
        ],
        { color: "#f2a63b", weight: 2, opacity: 0.85, dashArray: "6 8" },
      ).addTo(layer);
    }

    if (points.length === 1) {
      map.setView(points[0], 13);
    } else {
      map.fitBounds(points, { padding: [36, 36], maxZoom: 14 });
    }

    requestAnimationFrame(() => map.invalidateSize());
  }, [places, selected, onSelect, ready]);

  return <div ref={host} className="area-map h-[340px] w-full sm:h-[460px]" />;
}

export function directionsLink(destination: string) {
  const origin = encodeURIComponent(fullAddress);
  const dest = encodeURIComponent(destination);
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}`;
}

export function placeMiles(place: Place) {
  return milesBetween(homeCoords, place);
}
