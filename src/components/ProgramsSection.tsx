import { useEffect, useRef } from "react";
import kidsGroupImage from "@/assets/kids-meditation-group.jpg";
import teenImage from "@/assets/teen-meditation.jpg";

const programs = [
  {
    title: "Little Explorers (4-6)",
    description:
      "Playful introduction to mindfulness through stories, games, and simple breathing exercises designed for curious young minds.",
    image: kidsGroupImage,
    features: ["🛋️ Cozy Corner", "🎵 Calm Music", "🏅 Sticker Badges"],
  },
  {
    title: "Young Mindful (7-10)",
    description:
      "Structured mindfulness practice focusing on attention, emotional awareness, and building healthy habits.",
    image: kidsGroupImage,
    features: ["⏱️ Focus Timer", "📓 Gratitude Notes", "🔥Streak Rewards"],
  },
  {
    title: "Teen Zen (11-14)",
    description:
      "Advanced mindfulness techniques for teenagers dealing with academic pressure, social challenges, and emotional growth.",
    image: teenImage,
    features: ["🧠 Mindset Minis", "🌙 Sleep Stories", "🎯 Goal Cards"],
  },
];

const ProgramsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Simple scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll(".program-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="programs" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Programs for Every Age
          </h2>
          <p className="text-xl text-muted-foreground mx-auto">
            Age-specific mindfulness programs designed by child development
            experts to meet children where they are in their growth journey.
          </p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`program-item flex flex-col lg:flex-row items-center gap-12 opacity-0 transform transition-all duration-700`}
            >
              {/* Image Section */}
              <div
                className={`relative flex-shrink-0 overflow-hidden rounded-3xl shadow-soft ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
                style={{ width: "400px", height: "650px" }}
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-300 via-transparent opacity-30 rounded-3xl pointer-events-none"></div>
              </div>

              {/* Content Section */}
              <div
                className={`lg:max-w-3xl space-y-4 flex flex-col justify-center text-left transition-transform duration-700 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3 className="text-2xl font-bold text-foreground transition-transform duration-500 group-hover:translate-x-1">
                  {program.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed transition-all duration-500 group-hover:text-purple-500">
                  {program.description}
                </p>

                {/* Features as Badges */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">
                    What's Included:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature, i) => (
                      <span
                        key={feature}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border shadow bg-gray-100 text-black text-sm font-bold transition-transform duration-500 hover:scale-110 hover:bg-purple-200`}
                        style={{ transitionDelay: `${i * 0.1}s` }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
