import React from "react";

const features = [
  {
    id: 1,
    feature: "Child-Friendly Guided Meditations",
    mindery: (
      <span className="flex items-center gap-2">
        <span className="text-green-600 text-lg">✔️</span>
        Story-based, fun & short
      </span>
    ),
    others: (
      <span className="flex items-center gap-2">
        <span className="text-red-500 text-lg animate-bounce">❌</span>
        Generic adult content
      </span>
    ),
  },
  {
    id: 2,
    feature: "Safe & Ad-Free Environment",
    mindery: (
      <span className="flex items-center gap-2">
        <span className="text-green-600 text-lg">✔️</span>
        100% secure for kids
      </span>
    ),
    others: (
      <span className="flex items-center gap-2">
        <span className="text-red-500 text-lg animate-bounce">❌</span>
        Ads & distractions
      </span>
    ),
  },
  {
    id: 3,
    feature: "Age-Specific Programs",
    mindery: (
      <span className="flex items-center gap-2">
        <span className="text-green-600 text-lg">✔️</span>
        Tailored for 4–14
      </span>
    ),
    others: (
      <span className="flex items-center gap-2">
        <span className="text-red-500 text-lg animate-bounce">❌</span>
        One-size-fits-all
      </span>
    ),
  },
  {
    id: 4,
    feature: "Parent & Teacher Support",
    mindery: (
      <span className="flex items-center gap-2">
        <span className="text-green-600 text-lg">✔️</span>
        Guides, printables, progress insights
      </span>
    ),
    others: (
      <span className="flex items-center gap-2">
        <span className="text-red-500 text-lg animate-bounce">❌</span>
        Limited or none
      </span>
    ),
  },
];

const WhyChoose = () => {
  return (
    <section id="why" className="container mx-auto px-4 py-10">
      <h2 className="mb-8 text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
        Why Choose Mindery Kids Over Others?
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-2xl shadow-md ">
          <thead>
            <tr className="bg-indigo-50 dark:bg-indigo-900">
              <th className="text-violet-700 dark:text-violet-300 font-semibold py-3 px-4 text-left rounded-tl-2xl">
                Feature
              </th>
              <th className="text-violet-700 dark:text-violet-300 font-semibold py-3 px-4 text-left">
                Mindery Kids
              </th>
              <th className="text-violet-700 dark:text-violet-300 font-semibold py-3 px-4 text-left rounded-tr-2xl">
                Other Apps
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((row, index) => (
              <tr
                key={row.id}
                className={`transition-all duration-300 hover:bg-purple-50 dark:hover:bg-black ${
                  index % 2 === 0
                    ? "bg-gray-50 dark:bg-gray-800"
                    : "bg-white dark:bg-gray-700"
                }`}
              >
                <td className="py-3 px-4 font-medium text-gray-700 dark:text-gray-200">
                  {row.feature}
                </td>
                <td className="py-3 px-4">{row.mindery}</td>
                <td className="py-3 px-4">{row.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WhyChoose;
