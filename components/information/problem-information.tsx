export function ProblemInformation() {
  const issues = [
    "World conflicts impacting on travels;",
    "Natural disasters impacting on travels;",
    "Constant change of immigration rules due to world conflicts;",
    "Restriction on airport/train station due to natural disasters;",
    "Not knowing about the existence of areas to avoid;",
    "Health restrictions (Vaccines);",
    "Services that aren't available due to conflicts or natural disasters.",
  ];

  return (
    <section className="space-y-7" id="the-problem">
      <div>
        <h3 className="text-2xl text-center font-semibold">
          Understanding the problem
        </h3>
        <hr className="border-primary w-1/5 mx-auto mt-1"/>
      </div>
      <div className="px-8 rounded-lg shadow-lg space-y-4">
        <h4 className="text-xl font-semibold">Important Points</h4>
        <ul className="bg-dark-400 rounded-md">
          {issues.map((issue, index) => (
            <li key={index} className="flex items-start gap-4 p-4 rounded-lg">
              <span className="block w-2 h-2 mt-2 rounded-full bg-primary" />
              <p>{issue}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-8 rounded-lg shadow-lg space-y-4">
        <h4 className="text-xl font-semibold">
          How world conflicts may impact on international travels?
        </h4>
        <div className="bg-dark-400 p-4 rounded-lg space-y-3 tracking-wide">
          <p>
            In the recent years, the global population has faced an increase in
            global conflicts and natural disasters, those events, in addition to
            impacting the lives of local people, they also may effect possible
            tourist that were planning to travel to hat country or region. The
            impacts can be from a simple vaccine requirement, or, in serious
            cases, a travel blockage, preventing people from entering or leaving
            the area.
          </p>
          <p>
            Therefore, due to the increase of global conflicts and natural
            disaster, travellers may need a safe way to plan their trip based on
            updated information, with a tool that help them to know witch
            documents they may need to enter a area, if there is any kind of
            health restriction or even if a certain service is not available.
          </p>
          <p>
            However, besides the need for those kind of information, travellers
            also need a way to book a hotel, or even rent a car, that's why so
            important to combine all that features in just one app, a “super
            app”.
          </p>
        </div>
      </div>
      {/* <ul className="space-y-4">
          {issues.map((issue, index) => (
            <li
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span className="block w-2 h-2 mt-2 rounded-full bg-red-500" />
              <p className="text-gray-700">{issue}</p>
            </li>
          ))}
        </ul> */}
    </section>
  );
}
