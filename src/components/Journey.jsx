const events = [
  {
    title: "GATE Qualified - CS",
    desc: "Qualified for GATE in Computer Science & IT",
    year: "2024",
  },
  {
    title: "Frontend of Tantra'23",
    desc: "Developed the frontend of the college techfest website",
    year: "2023",
  },
  {
    title: "THRIVE Volunteer",
    desc: "THRIVE project coordination at VJEC and LinkedIn page admin",
    year: "2023",
  },
  {
    title: "AWS Deepracer #33",
    desc: "Achieved semifinalist position in the AWS Deepracer Contest",
    year: "2022",
  },
  {
    title: "Joined VJEC",
    desc: "Started B.Tech in Computer Science & Engineering",
    year: "2021",
  },
  {
    title: "+2 Comp. Science",
    desc: "Graduated from St. Michael's AIHSS Kannur",
    year: "2019-2021",
  },
  { title: "Born", desc: "Genesis block", year: "Feb 16" },
];

export default function Journey() {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-6 2xl:px-0 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 max-sm:py-20 max-sm:mx-5 max-sm:rounded-lg">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute right-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <section className="dark:text-white" id="timeline">
          <div className="container max-w-5xl 2xl:max-w-6xl py-12 mx-auto 2xl:pt-44">
            <div className="grid gap-4 sm:mx-4 2xl:mx-0 sm:grid-cols-12">
              <div className="col-span-12 sm:col-span-3 ">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-purple-800">
                  <h3 className="text-3xl 2xl:text-4xl font-semibold">Timeline</h3>
                  <span className="text-sm 2xl:text-base font-bold tracking-wider uppercase dark:text-gray-400">
                    my Journey through time
                  </span>
                </div>
              </div>
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-gray-300">
                  <div className="flex flex-col mb-10 font-serif relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-purple-800">
                    <p className="mt-3 text-base 2xl:text-2xl text-gray-200 sm:text-gray-400">
                      <span className="bg-red-600 pl-2 pr-1 py-1 text-white rounded-md max-sm:uppercase">
                        live <span className="text-5xl text-white">.</span>
                      </span>{" "}
                      <span className="animate-pulse pl-1 sm:pl-5">
                        {/* await fetching ... */}
                        Aiming for the Stars
                        {/* Pursuing Greatness */}
                      </span>
                    </p>
                  </div>
                  {events.map((event) => {
                    return (
                      <Item
                        title={event.title}
                        desc={event.desc}
                        year={event.year}
                        key={event.title}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const Item = ({ title, desc, year }) => {
  return (
    <div className="flex flex-col mb-10 font-serif relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-purple-600">
      <h3 className="text-xl 2xl:text-3xl text-gray-200 sm:text-gray-300 font-semibold tracking-wide">
        {title}
      </h3>
      <time className="text-xs 2xl:text-lg tracking-wide uppercase text-gray-400">
        {year}
      </time>
      <p className="mt-3 text-base 2xl:text-xl text-gray-200 sm:text-gray-400 2xl:pb-10">{desc}</p>
    </div>
  );
};
