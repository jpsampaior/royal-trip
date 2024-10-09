export default function StyleInformation() {
  const colors = [
    {
      name: "Primary",
      hex: "#730573",
      description:
        "evokes a sense of adventure, creativity, relaxation, and exclusivity, aligning with the inspiring and premium experiences that travel offers.",
    },
    {
      name: "Background",
      hex: "#2B2B2B",
      description:
        "provides a sense of depth and contrast, making the primary color stand out and creating a visually appealing experience.",
    },
    {
      name: "Cards",
      hex: "#252525",
      description:
        "creates a clear distinction between different sections of the app, making it easier for users to navigate and find the information they need.",
    },
    {
      name: "Constructive",
      hex: "#14AE5C",
      description: "represents success, growth, and positivity.",
    },
    {
      name: "Destructive",
      hex: "#EE5452",
      description: "indicates errors or negative actions.",
    },
    {
      name: "Warning",
      hex: "#E8B931",
      description: "alerts users to potential issues or important information.",
    },
  ];

  return (
    <section id="style">
      <div className="text-center">
        <h3 className="text-2xl font-semibold">Style</h3>
        <hr className="border-primary w-12 mx-auto mt-1" />
      </div>
      <div className="px-8 rounded-lg shadow-lg space-y-4">
        <h4 className="text-xl font-semibold">Colors</h4>
        <ul className="bg-dark-400 rounded-md">
          {colors.map((color, index) => (
            <li key={index} className="flex items-start gap-4 p-4 rounded-lg">
              <span
                className="block w-4 h-4 mt-1 rounded-full"
                style={{ backgroundColor: color.hex }}
              />
              <p>
                <span className="font-semibold">{color.name}: </span>
                {color.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
