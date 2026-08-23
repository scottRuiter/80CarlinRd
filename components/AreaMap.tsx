"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { fullAddress, homeCoords, type areaPlaces } from "@/lib/property";

type Place = (typeof areaPlaces)[number];
type Leaflet = typeof import("leaflet");

type Props = {
  places: Place[];
  selected: string;
  onSelect: (name: string) => void;
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

function formatMiles(miles: number) {
  return miles < 10 ? `${miles.toFixed(1)} miles` : `${Math.round(miles)} miles`;
}

function pinIcon(L: Leaflet, kind: "home" | "place" | "active") {
  if (kind === "home") {
    return L.divIcon({
      className: "map-pin-wrap",
      html: `<div class="map-pin map-pin-home" title="${fullAddress}"><span>80</span></div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });
  }
  return L.divIcon({
    className: "map-pin-wrap",
    html: `<div class="map-pin ${kind === "active" ? "map-pin-active" : "map-pin-place"}"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });
}

export function AreaMap({ places, selected, onSelect }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const onSelectRef = useRef(onSelect);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const overlayRef = useRef<import("leaflet").LayerGroup | null>(null);
  const leafletRef = useRef<Leaflet | null>(null);
  const placesRef = useRef(places);
  const selectedRef = useRef(selected);

  onSelectRef.current = onSelect;
  placesRef.current = places;
  selectedRef.current = selected;

  useEffect(() => {
    const node = host.current;
    if (!node) return;
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

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      L.marker([homeCoords.lat, homeCoords.lng], {
        icon: pinIcon(L, "home"),
        zIndexOffset: 400,
      })
        .bindPopup(`<strong>80 Carlin Rd</strong><br/>Home base`)
        .addTo(map);

      const overlay = L.layerGroup().addTo(map);
      mapRef.current = map;
      overlayRef.current = overlay;
      drawOverlay(L, map, overlay, placesRef.current, selectedRef.current);
      map.invalidateSize();
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      overlayRef.current = null;
    };
  }, []);

  useEffect(() => {
    const L = leafletRef.current;
    const map = mapRef.current;
    const overlay = overlayRef.current;
    if (!L || !map || !overlay) return;
    drawOverlay(L, map, overlay, places, selected);
  }, [places, selected]);

  function drawOverlay(
    L: Leaflet,
    map: import("leaflet").Map,
    overlay: import("leaflet").LayerGroup,
    nextPlaces: Place[],
    nextSelected: string,
  ) {
    overlay.clearLayers();

    const plotted = new Set<string>();
    let selectedPlace: Place | undefined;

    for (const place of nextPlaces) {
      if (place.name === nextSelected) selectedPlace = place;
      const key = `${place.lat.toFixed(5)},${place.lng.toFixed(5)}`;
      if (plotted.has(key) && place.name !== nextSelected) continue;
      plotted.add(key);

      const miles = milesBetween(homeCoords, place);
      const active = place.name === nextSelected;
      const marker = L.marker([place.lat, place.lng], {
        icon: pinIcon(L, active ? "active" : "place"),
        zIndexOffset: active ? 300 : 200,
      })
        .bindPopup(
          `<strong>${place.name}</strong><br/>${formatMiles(miles)} from 80 Carlin Rd`,
        )
        .on("click", () => onSelectRef.current(place.name));
      marker.addTo(overlay);
      if (active) marker.openPopup();
    }

    if (selectedPlace) {
      L.polyline(
        [
          [homeCoords.lat, homeCoords.lng],
          [selectedPlace.lat, selectedPlace.lng],
        ],
        { color: "#f2a63b", weight: 3, opacity: 0.95 },
      ).addTo(overlay);

      map.flyToBounds(
        [
          [homeCoords.lat, homeCoords.lng],
          [selectedPlace.lat, selectedPlace.lng],
        ],
        { padding: [64, 64], maxZoom: 13, duration: 0.7 },
      );
      return;
    }

    const bounds = L.latLngBounds([[homeCoords.lat, homeCoords.lng]]);
    for (const place of nextPlaces) bounds.extend([place.lat, place.lng]);
    map.fitBounds(bounds, { padding: [36, 36], maxZoom: 12 });
  }

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
