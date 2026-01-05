"use client";

import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect } from "react";
import L from "leaflet";

interface Dino {
  id: number;
  name: string;
  description: string | null;
  originCountry: string | null;
  period: string | null;
  diet: string | null;
  latitude: number;
  longitude: number;
  length: number | null;
  height: number | null;
  weight: number | null;
  funFacts: string[] | null;
  imageUrl: string | null;
}

interface MapProps {
  dinos: Dino[];
  selectedDino: Dino | null;
  onSelectDino: (dino: Dino) => void;
}

function ChangeView({ center, selectedDinoId }: { center: [number, number]; selectedDinoId: number | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedDinoId !== null) {
      map.flyTo(center, 8, { duration: 1.5 });

      setTimeout(() => {
        map.eachLayer((layer) => {
          if (layer instanceof L.CircleMarker) {
            const marker = layer as L.CircleMarker;
            const markerLatLng = marker.getLatLng();
            if (markerLatLng.lat === center[0] && markerLatLng.lng === center[1]) {
              marker.openPopup();
            }
          }
        });
      }, 1500);
    }
  }, [center, selectedDinoId, map]);

  return null;
}

export default function Map({ dinos, selectedDino, onSelectDino }: MapProps) {
  const defaultCenter: [number, number] = [20, 0];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={2}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {dinos.map((dino) => (
        <CircleMarker
          key={dino.id}
          center={[dino.latitude, dino.longitude]}
          radius={10}
          pathOptions={{
            fillColor: "#16a34a",
            fillOpacity: 0.6,
            stroke: false,
          }}
          eventHandlers={{
            click: () => {
              onSelectDino(dino);
            },
          }}
        >
          <Popup>
            <strong>{dino.name}</strong> <br />
            {dino.originCountry}
          </Popup>
        </CircleMarker>
      ))}

      {selectedDino && (
        <ChangeView
          center={[selectedDino.latitude, selectedDino.longitude]}
          selectedDinoId={selectedDino.id}
        />
      )}
    </MapContainer>
  );
}