import React from "react";

const TimeLine = () => {
  const data = [
    {
      id: 0,
      title: "Software Engineer",
      duration: "Feb 2025 - Present · 1 yr 5 mos",
      org: "Alhabib Asset Management Limited · Full-time",
      location: "Karāchi, Sindh, Pakistan · On-site",
      skills: ["React Native", "React.js", "ASP.NET Core", "Oracle", "REST APIs", "C#"],
      class:
        "bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300",
    },
    {
      id: 1,
      title: "Software Engineer - React Native",
      duration: "Jul 2024 - Feb 2025 · 8 mos",
      org: "PPHI · Full-time",
      location: "Karāchi, Sindh, Pakistan · On-site",
      skills: ["React Native", "Node.js", "REST APIs", "Third-party APIs"],
      class:
        "bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300",
    },
    {
      id: 2,
      title: "React Native Developer",
      duration: "Aug 2022 - Jul 2024 · 2 yrs",
      org: "Enterprise Team · Hybrid",
      location: "Karāchi, Sindh, Pakistan · Hybrid",
      skills: ["React Native", "React.js", "Node.js", "MongoDB", "Redux Toolkit", "Git"],
      class:
        "bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300",
    },
    {
      id: 3,
      title: "Data Structures Developer",
      duration: "Mar 2020 - Aug 2022 · 2 yrs 6 mos",
      org: "Fiverr · Freelance",
      location: "Remote",
      skills: ["Java", "Data Structures", "Algorithms"],
      class:
        "bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300",
    },
  ];
  
  const dotClass = {
    0: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    1: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    2: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    3: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  };

  return (
    <div>
      <ol className="relative border-s-2 border-gray-200 dark:border-gray-700">
        {data.map((item) => (
          <li className="mb-12 ms-6" key={item.id}>
            <span
              className={`absolute flex items-center justify-center w-7 h-7 rounded-full -start-[1.1rem] ring-8 ring-white dark:ring-gray-900 ${dotClass[item.id]}`}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <div className="flex items-center flex-wrap gap-x-3 mb-1">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              {item.id === 0 && (
                <span className="bg-emerald-500 text-white text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full">
                  Current
                </span>
              )}
            </div>
            <p className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
              {item.org}
            </p>
            <time className="block mt-0.5 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.duration}
            </time>
            {item.location && (
              <p className="text-xs md:text-sm text-gray-400 dark:text-gray-500">
                {item.location}
              </p>
            )}
            <div className="flex flex-wrap gap-2 mt-4">
              {item.skills.map((i, idx) => (
                <span key={idx} className={`${item.class} transition-transform hover:scale-105`}>
                  {i}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;
