import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-500 py-4 space-y-2">
      <div className="container mx-auto text-center">
        <h5 className="text-xl font-bold text-white">Royal Trip</h5>
        <p className="text-md text-zinc-300 mt-2">
          This project was developed during my academic exchange at Concordia
          University as part of the User Interface Design course. <br />
          Student: João Pedro Sampaio Ribeiro.
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <a
          href="https://github.com/jpsampaior"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            size={24}
            className="text-white hover:text-primary transition-colors"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/joao-pedro-sampaio-ribeiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            size={24}
            className="text-white hover:text-primary transition-colors"
          />
        </a>
      </div>
    </footer>
  );
}
