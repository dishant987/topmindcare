import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-meditation.jpg";

interface HeroSectionProps {
  onStartTrial: () => void;
}

const HeroSection = ({ onStartTrial }: HeroSectionProps) => {
  return (
    <section className=" py-20 lg:py-22">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full 
               bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
               shadow-md transition-all duration-300 ease-in-out
               hover:bg-gradient-to-r hover:from-purple-300 hover:via-purple-200 hover:to-green-200
               hover:text-gray-900 dark:hover:text-gray-900 
               hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <span className="font-medium text-primary dark:text-violet-400 hover:text-black dark:hover:text-black transition-colors duration-300">
                  🌈 Calm Minds, Happy Hearts
                </span>
                <span className="text-lg animate-bounce hover:animate-none">
                  ›
                </span>
              </button>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Mindfulness &<br />
                <span className="text-primary">Meditation for Kids</span>
                <br />
                <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">
                  (4-14)
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Build emotional resilience, focus, and inner peace in children
                through engaging mindfulness practices designed specifically for
                young minds.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                onClick={onStartTrial}
                className="text-base"
              >
                Start Free Trial
              </Button>
              <Button
                variant="minimal"
                size="lg"
                className="text-base bg-green-500 text-white hover:bg-green-600"
              >
                Explore Programs
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-1">
              {/* Focus */}
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg p-4 hover:shadow-lg dark:hover:shadow-xl transition transform hover:scale-105">
                <div className="text-2xl">🧠</div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Improves
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Focus
                  </div>
                </div>
              </div>

              {/* Stress */}
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg p-4 hover:shadow-lg dark:hover:shadow-xl transition transform hover:scale-105">
                <div className="text-2xl">😊</div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Reduces
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Stress
                  </div>
                </div>
              </div>

              {/* Sleep */}
              <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg p-4 hover:shadow-lg dark:hover:shadow-xl transition transform hover:scale-105">
                <div className="text-2xl">💤</div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Better
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Sleep
                  </div>
                </div>
              </div>

              {/* Empathy */}
              <div className="flex lg:w-[160px] items-center gap-3 bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg p-4 hover:shadow-lg dark:hover:shadow-xl transition transform hover:scale-105">
                <div className="text-2xl">❤️</div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Builds
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    Empathy
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="Child practicing mindful meditation"
                className="w-full h-full rounded-2xl shadow-strong hero-float"
              />
            </div>

            {/* Floating Cards */}
            <div
              className="absolute top-[90%] -left-2 rotate-[-5deg] 
             bg-white dark:bg-gray-800 p-4 rounded-xl 
             shadow-md dark:shadow-lg animate-float transition-transform duration-500 ease-in-out
             hover:scale-105 hover:-rotate-2 hover:shadow-xl hover:dark:shadow-xl hover:brightness-105
             opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-sm font-extrabold text-gray-900 dark:text-gray-100 mb-2">
                Today's Journey
              </div>
              <ul className="pl-6 p-2 list-disc list-inside text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <li>
                  <span className="mr-1" role="img" aria-label="Dragon">
                    🐉
                  </span>
                  Dragon Breath (3 min)
                </li>
                <li>
                  <span className="mr-1" role="img" aria-label="Butterfly">
                    🦋
                  </span>
                  Butterfly Body Scan (5 min)
                </li>
                <li>
                  <span className="mr-1" role="img" aria-label="Moon">
                    🌙
                  </span>
                  Sleep Story: Star Boat (7 min)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
