"use client";

import ProtHomeImage from "@/public/prot-home.png";
import ProtHomeDetailsImage from "@/public/prot-home-details.png";
import ProtLocationDetailsImage from "@/public/prot-location-details.png";
import ProtLocationCardsImage from "@/public/prot-location-flights.png";

import Image from "next/image";
import { Button } from "../ui/button";

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
      <div className="space-y-5">
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
        <div className="text-center">
          <Button>
            <a
              href="https://www.figma.com/proto/kqNsumTYBQpk6BY8tJxkmZ/Royal-Trip?page-id=0%3A1&node-id=43-447&node-type=FRAME&viewport=-2623%2C1250%2C4.09&t=veMzmIr4Aa7pCtPF-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=43%3A447&share=1"
              target="_blank"
            >
              View Prototype on Figma!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
