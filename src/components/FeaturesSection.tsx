const features = [
  {
    title: "Guided Adventures",
    tag: "Story Meditations",
    description:
      "Short, age-wise journeys that help kids calm their bodies and name their feelings.",
  },
  {
    title: "Tools for Big Feelings",
    tag: "Anytime Calm",
    description:
      "Quick “reset” audios for anger, worry, pre-exam jitters, and bedtime battles.",
  },
  {
    title: "Guides & Routines",
    tag: "Parent Hub",
    description:
      "Weekly tips, printable charts, and simple routines you can use at home or school.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Mindery Kids?
          </h2>
          <p className="text-xl text-left text-muted-foreground  mx-auto">
            Children learn best through play and stories. Our sessions blend
            gentle breathing, guided imagery, and music to make mindfulness
            enjoyable and effective
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card hover:bg-card/80 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Tag instead of icon */}
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-green-50 text-green-700 font-bold text-sm">
                {feature.tag}
              </div>

              <h3 className="text-xl font-extrabold text-foreground mb-2">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FeaturesSection;
