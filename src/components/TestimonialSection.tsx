const testimonials = [
  {
    text: "Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.",
    author: "Priya, Mom of 6-year-old",
  },
  {
    text: "The 5-minute ‘reset’ before homework has been a game changer for focus.",
    author: "Ravi, Dad of 10-year-old",
  },
  {
    text: "Our class uses the breathing games after lunch. Kids come back calm and ready.",
    author: "Anika, Grade 4 Teacher",
  },
];

const TestimonialSection = () => {
  return (
    <section id="for-parents" className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8">
        What Families Say
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg border border-slate-100 dark:border-gray-700 p-6 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center mb-3">
              {"★★★★★".split("").map(( starIdx) => (
                <span
                  key={starIdx}
                  className="text-yellow-500 dark:text-yellow-400 text-base mr-1"
                >
                  ★
                </span>
              ))}
            </div>
            <div className="text-gray-800 dark:text-gray-200 text-[1.01rem] mb-4 italic">
              “{t.text}”
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              — {t.author}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
