"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

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

interface SidebarProps {
  dinos: Dino[];
  onSelectDino: (dino: Dino) => void;
  expandedDinoId: number | null;
  setExpandedDinoId: (id: number | null) => void;
}

export default function Sidebar({ dinos, onSelectDino, expandedDinoId, setExpandedDinoId }: SidebarProps) {
  const dinoRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleDinoClick = (dino: Dino) => {
    onSelectDino(dino);
    setExpandedDinoId(expandedDinoId === dino.id ? null : dino.id);
  };

  useEffect(() => {
    if (expandedDinoId !== null && dinoRefs.current[expandedDinoId]) {
      dinoRefs.current[expandedDinoId]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [expandedDinoId]);

  const formatWeight = (weight: number) => {
    if (weight >= 1000) {
      const tons = weight / 1000;
      return `${tons.toFixed(1)} tons`;
    }
    return `${weight}kg`;
  };

  return (
    <div className="w-100 h-full bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dinosaurs</h2>
        <p className="text-sm text-gray-600 mb-6">
          Click on a dinosaur to view details and location
        </p>

        <div className="space-y-3">
          {dinos.map((dino) => {
            const isExpanded = expandedDinoId === dino.id;

            return (
              <div
                key={dino.id}
                ref={(el) => {
                  dinoRefs.current[dino.id] = el;
                }}
                className={`rounded-lg border transition-all ${
                  isExpanded
                    ? "border-green-500 bg-green-50"
                    : "border-gray-200 hover:border-green-500 hover:bg-green-50"
                }`}
              >
                <button
                  onClick={() => handleDinoClick(dino)}
                  className="w-full text-left p-4"
                >
                  <h3 className="font-bold text-gray-900">{dino.name}</h3>
                  {dino.originCountry && (
                    <p className="text-sm text-gray-600 mt-1">
                      {dino.originCountry}
                    </p>
                  )}
                  {dino.period && (
                    <p className="text-xs text-gray-500 mt-1">{dino.period}</p>
                  )}
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 space-y-3 border-t border-green-200 pt-3 mt-2">
                    {dino.description && (
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {dino.description}
                      </p>
                    )}

                    {dino.imageUrl && (
                      <Image
                        src={dino.imageUrl}
                        alt={dino.name}
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    )}

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {dino.diet && (
                        <div>
                          <span className="font-semibold text-gray-900">Diet:</span>
                          <p className="text-gray-600">{dino.diet}</p>
                        </div>
                      )}
                      {dino.length && (
                        <div>
                          <span className="font-semibold text-gray-900">Length:</span>
                          <p className="text-gray-600">{dino.length}m</p>
                        </div>
                      )}
                      {dino.height && (
                        <div>
                          <span className="font-semibold text-gray-900">Height:</span>
                          <p className="text-gray-600">{dino.height}m</p>
                        </div>
                      )}
                      {dino.weight && (
                        <div>
                          <span className="font-semibold text-gray-900">Weight:</span>
                          <p className="text-gray-600">{formatWeight(dino.weight)}</p>
                        </div>
                      )}
                    </div>

                    {dino.funFacts && dino.funFacts.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">
                          Fun Facts:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {dino.funFacts.map((fact, index) => (
                            <li key={index}>{fact}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
