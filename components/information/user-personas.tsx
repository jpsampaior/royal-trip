export function UserPersonas() {
  const personas = [
    {
      name: "Josh",
      description:
        "Josh loves to travel and has a lot of experience with it, but he's tired of having to download a single app for everything he has to do on his trips. He has an app for every train/plane company, one for restaurants, one to book hotels, and another for trails. He wants a tool that gives him everything in a single application.",
    },
    {
      name: "Ricardo",
      description:
        "Ricardo is from the UK and lives in London. He's planning a vacation to Saudi Arabia to visit a friend working there. He's trying to figure out which documents he needs to enter the country—whether a visa is required or if he can enter with just his passport. With limited time due to work, he needs help planning his trip.",
    },
    {
      name: "Kim",
      description:
        "Kim recently graduated from Computer Science and, to relax after a stressful period, is planning a trip to Japan. She especially wants to visit the Okinawa archipelago, where her favorite sport, karate, originated. She also plans to visit Kagoshima and the volcanic island of Sakurajima. However, she's concerned about safety and wonders if a tool could inform her about the safety of places, cell service availability, and emergency contacts.",
    },
  ];

  return (
    <section className="px-8 rounded-lg shadow-lg my-8 space-y-4" id="personas">
      <div>
        <h3 className="text-2xl text-center font-semibold">Personas</h3>
        <hr className="border-primary w-24 mx-auto mt-1" />
      </div>
      <ul className="rounded-md space-y-4">
        {personas.map((persona, index) => (
          <li key={index} className="p-4 bg-dark-400 rounded-lg">
            <h4 className="text-xl font-bold mb-2 text-primary">
              {persona.name}
            </h4>
            <p className="tracking-wide">{persona.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
