"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";

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

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-100">
      <p className="text-lg text-gray-600">Loading map...</p>
    </div>
  ),
});

export default function MapPage() {
  const [dinos, setDinos] = useState<Dino[]>([]);
  const [selectedDino, setSelectedDino] = useState<Dino | null>(null);
  const [expandedDinoId, setExpandedDinoId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDinos() {
      try {
        const response = await fetch("/api/dinosaurs");
        const data = await response.json();
        setDinos(data);
      } catch (error) {
        console.error("Error fetching dinosaurs:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDinos();
  }, []);

  const handleSelectDino = (dino: Dino) => {
    setSelectedDino(dino);
    setExpandedDinoId(dino.id);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <p className="text-xl text-gray-600">Loading dinosaurs...</p>
      </div>
    );
  }

  return (
    <div className="flex fixed top-16 left-0 right-0 bottom-0">
      <Sidebar
        dinos={dinos}
        onSelectDino={handleSelectDino}
        expandedDinoId={expandedDinoId}
        setExpandedDinoId={setExpandedDinoId}
      />
      <div className="flex-1 h-full">
        <Map
          dinos={dinos}
          selectedDino={selectedDino}
          onSelectDino={handleSelectDino}
        />
      </div>
    </div>
  );
}
