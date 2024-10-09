"use client";

import ProtHomeImage from "@/public/prot-home.png";
import ProtHomeDetailsImage from "@/public/prot-home-details.png";
import ProtLocationDetailsImage from "@/public/prot-location-details.png";
import ProtLocationCardsImage from "@/public/prot-location-flights.png";

import Image from "next/image";

export function AppImages() {
  const pages = [
    { title: "Home", image: ProtHomeImage },
    { title: "Home - Location Details", image: ProtHomeDetailsImage },
    { title: "Location - Details", image: ProtLocationDetailsImage },
    { title: "Location - Cards", image: ProtLocationCardsImage },
  ];

  return (
    <section id="sketches-&-wireframes">
      <div className="text-center">
        <h3 className="text-2xl font-semibold">App Prototype</h3>
        <hr className="border-primary w-1/12 mx-auto mt-1" />
      </div>
      <div className="flex gap-10 justify-center">
        {pages.map((page, index) => (
          <div key={index} className="text-center">
            <h4 className="text-lg font-medium mt-4">{page.title}</h4>
            <Image
              src={page.image}
              alt={page.title}
              className="rounded-lg w-[16vw] h-auto object-cover"
              style={{ aspectRatio: "9/19.5" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
