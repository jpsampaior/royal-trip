import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-fit bg-dark-400 p-4 rounded-full mx-auto">
      <ul className="flex justify-center gap-8">
        {[
          "The problem",
          "Personas",
          "User Journey",
          "Sketches & Wireframes",
          "Style",
          "App prototype",
          "User research",
          "Bibliography",
        ].map((item, index) => (
          <li key={index}>
            <Link href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}>
              <span
                className={cn(
                  "text-white px-4 py-2 rounded-full transition-all",
                  "hover:bg-primary/40 hover:scale-105"
                )}
              >
                {item}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
