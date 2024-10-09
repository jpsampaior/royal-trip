export default function Bibliography() {
  const references = [
    {
      title: "Travel Apps discussion forum",
      link: "https://www.tripadvisor.ca/ShowTopic-g1-i49577-k13957653-Travel_apps-The_Layover_Lounge.html",
    },
    {
      title: "Immigration Forum",
      link: "https://www.tripadvisor.ca/ShowTopic-g147262-i230-k14213794-Immigration_forum-Barbados.html#115996361",
    },
    {
      title: "Travel Documents Forum",
      link: "https://www.tripadvisor.ca/ShowTopic-g293991-i4477-k14484822-Travel_document-Saudi_Arabia.html#118395287",
    },
    {
      title: "Safety Concerns Regarding Certain Areas",
      link: "https://www.tripadvisor.ca/ShowTopic-g294232-i525-k14491750-Is_it_safe_to_stay_around_kogoshima_Sakurajima_area-Japan.html#118455415",
    },
    {
      title: "Top Travel App Ideas",
      link: "https://www.mindinventory.com/blog/top-travel-app-ideas/",
    },
    {
      title: "The Meaning of Purple in Design",
      link: "https://www.nixsensor.com/blog/color-column-violet/#:~:text=Purple%20combines%20the%20calm%20stability,mystery%2C%20independence%2C%20and%20magic",
    },
    {
      title: "Mauveine Color Information",
      link: "https://color-name.com/mauveine.color",
    },
  ];

  return (
    <section className="space-y-4 px-8" id="bibliography">
      <div>
        <h3 className="text-2xl text-center font-semibold">Bibliography</h3>
        <hr className="border-primary w-1/12 mx-auto mt-1" />
      </div>
      <ul className="bg-dark-400 rounded-md">
        {references.map((reference, index) => (
          <li key={index} className="flex items-start gap-4 p-4 rounded-lg">
            <span className="block w-2 h-2 mt-2 rounded-full bg-primary" />
            <a
              href={reference.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-all"
            >
              {reference.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
