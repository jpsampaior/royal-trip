"use client";

import HomeScreen from "@/public/home-screen.jpg";
import HomeLocationDetailsScreen from "@/public/home-location-details-screen.jpg";
import LocationDetailsScreen from "@/public/location-details-screen.jpg";
import LocationCardsScreen from "@/public/location-cards-screen.jpg";
import Image from "next/image";

export function SketchesAndWireframes() {
  const pages = [
    { title: "Home", image: HomeScreen },
    { title: "Home - Location Details", image: HomeLocationDetailsScreen },
    { title: "Location - Details", image: LocationDetailsScreen },
    { title: "Location - Cards", image: LocationCardsScreen },
  ];

  return (
    <section id="sketches-&-wireframes">
      <div className="text-center">
        <h3 className="text-2xl font-semibold">Sketches & Wireframes</h3>
        <hr className="border-primary w-2/12 mx-auto mt-1" />
      </div>
      <div className="flex gap-10 justify-center">
        {pages.map((page, index) => (
          <div key={index} className="text-center">
            <h4 className="text-lg font-medium mt-4">{page.title}</h4>
            <Image
              src={page.image}
              alt={page.title}
              className="rounded-lg w-[15vw] h-auto object-cover"
              style={{ aspectRatio: "9/16" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
