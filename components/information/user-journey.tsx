import Image from "next/image";
import UserFlowsImage from "@/public/user-flow.webp";

export function UserJourney() {
  return (
    <section className="px-8" id="user-journey">
      <div>
        <h3 className="text-2xl text-center font-semibold">User Journey</h3>
        <hr className="border-primary w-1/12 mx-auto mt-1" />
      </div>
      <Image
        src={UserFlowsImage}
        width={1200}
        height={1000}
        alt="User Flow"
        loading="lazy"
        className="mx-auto"
      />
    </section>
  );
}
