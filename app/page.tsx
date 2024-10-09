import Footer from "@/components/footer/footer";
import { AppImages } from "@/components/information/app-images";
import Bibliography from "@/components/information/bibliography";
import { ProblemInformation } from "@/components/information/problem-information";
import { SketchesAndWireframes } from "@/components/information/sketches-wireframes";
import StyleInformation from "@/components/information/style-information";
import { UserJourney } from "@/components/information/user-journey";
import { UserPersonas } from "@/components/information/user-personas";
import UserResearch from "@/components/information/user-research";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <header>
        <div className="text-center mt-10 mb-5">
          <h1 className="text-4xl font-extrabold tracking-tight alternate-font">
            Royal Trip
          </h1>
          <h2 className="text-xl font-semibold tracking-tight first:mt-0">
            Your Journey, Elevated.
          </h2>
          <hr className="w-44 mx-auto mt-1 border-primary" />
        </div>
        <Navbar />
      </header>
      <main className="space-y-8">
        <ProblemInformation />
        <UserPersonas />
        <UserJourney />
        <SketchesAndWireframes />
        <StyleInformation />
        <AppImages />
        <UserResearch />
        <Bibliography />
      </main>
      <Footer />
    </>
  );
}
