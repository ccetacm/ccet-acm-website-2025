"use client";
import WorldMap from "./ui/WorldMap";

export default function WorldMapDemo() {
  return (
    <div className="w-full">
      <WorldMap
        dots={[
          {
            start: {
              lat: 20.5937,
              lng: 78.9629,
              label: "India",
            },
            end: {
              lat: 23.6978,
              lng: 120.9605,
              label: "Taiwan",
            },
          },
          {
            start: {
              lat: 20.5937,
              lng: 78.9629,
              label: "India",
            },
            end: {
              lat: 41.8719,
              lng: 12.5674,
              label: "Italy",
            },
          },
          {
            start: {
              lat: 20.5937,
              lng: 78.9629,
              label: "India",
            },
            end: {
              lat: 39.3999,
              lng: -8.2245,
              label: "Portugal",
            },
          },
          {
            start: {
              lat: 20.5937,
              lng: 78.9629,
              label: "India",
            },
            end: {
              lat: 37.0902,
              lng: -95.7129,
              label: "USA",
            },
          },
          {
            start: {
              lat: 20.5937,
              lng: 78.9629,
              label: "India",
            },
            end: {
              lat: 23.8859,
              lng: 45.0792,
              label: "Saudi Arabia",
            },
          },
        ]}
        lineColor="#0ea5e9"
      />
    </div>
  );
}