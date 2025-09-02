const features = [
  {
    title: "Ad-Free & Safe",
    description: "Child-first design with privacy controls and no external ads.",
  },
  {
    title: "Rewards that Motivate",
    description:
      "Stars, badges, and gentle streaks encourage healthy habits—no pressure.",
  },
  {
    title: "Offline Access",
    description: "Download favorite sessions for calm on the go.",
  },
  {
    title: "Sleep Mode",
    description:
      "Fade-out music and dim visuals help kids drift off peacefully.",
  },
  {
    title: "Classroom Friendly",
    description:
      "Teacher packs with 5-minute start-of-class resets and posters.",
  },
  {
    title: "Multi-Child Profiles",
    description: "Personalized tracks for each child in the family.",
  },
];

const Features = () => {
  return (
    <section id="features" className="container mx-auto px-4 py-10">
      <h2 className="mb-10 text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-left">
        Built for Kids, Loved by Parents
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, index) => (
          <div
            key={feat.title}
            className={`bg-white dark:bg-gray-800 rounded-2xl border border-slate-100 dark:border-gray-700 p-6 shadow-md transform transition duration-500 
                        hover:shadow-xl hover:-translate-y-2 hover:scale-105 
                        opacity-0 animate-fadeIn`}
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: "forwards",
            }}
          >
            <div className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {feat.title}
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              {feat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
