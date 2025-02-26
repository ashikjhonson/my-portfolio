import p1 from "../assets/project/tantra.jpeg";
import p2 from "../assets/project/ktu-lab.jpeg";
import p3 from "../assets/project/mysql-node.png";

const projects = [
  {
    name: "Tantra'23",
    description: "College Techfest Website",
    imageSrc: p1,
    imageAlt: "Alt",
    href: "#",
    git_link: "https://github.com/ashikjhonson/tantra-frontend",
    web_link: "https://techfest.vjec.ac.in/",
  },
  {
    name: "KTU Labs",
    description: "A collection of KTU CS Lab programs",
    imageSrc: p2,
    imageAlt: "Alt",
    href: "#",
    git_link: "https://github.com/ashikjhonson/KTU-CSE-Labs-site",
    web_link: "https://ktu-cse-labs-site.vercel.app/",
  },
  {
    name: "Login System",
    description: "A basic mysql node Login System",
    imageSrc: p3,
    imageAlt: "Alt",
    href: "#",
    git_link: "https://github.com/ashikjhonson/mysql-node-login-system",
    web_link: false,
  },
];

export default function Project() {
  return (
    <div className="relative isolate px-6 lg:px-8" id="project">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:from-[#ff80b5] dark:to-[#9089fc]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 2xl:px-2 pt-5">
        <div className="mx-auto max-w-2xl py-16 lg:max-w-none ">
          {/* <h2 className="text-3xl 2xl:text-5xl pb-5 2xl:pt-10 font-bold tracking-tight sm:text-4xl ">
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              What I've Built
            </span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              Latest Projects
            </span>
          </h2>
           */}
          <h2 className="text-3xl sm:text-4xl 2xl:text-5xl sm:pb-5 font-bold w-fit mx-auto tracking-tight bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            What I've built
            <br />
            <span className="text-white">Latest Projects</span>
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {projects.map((project) => (
              <div key={project.name} className="group relative">
                <div className="relative h-80 2xl:h-96 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    alt={project.imageAlt}
                    src={project.imageSrc}
                    className="h-full w-full object-fill border border-violet-800 rounded-lg"
                  />
                </div>
                <h3 className="mt-6 text-sm 2xl:text-lg text-gray-300">
                  <a href={project.href}>
                    <span className="absolute inset-0" />
                    {project.name}
                  </a>
                </h3>
                <p className="text-base 2xl:text-xl font-normal 2xl:font-medium text-white">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <a
          className="w-fit mx-auto inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium 2xl:text-xl text-gray-900 rounded-full group bg-gradient-to-br from-purple-400 to-blue-600 group-hover:from-purple-400 group-hover:to-blue-600 hover:text-white dark:text-white"
          href="https://github.com/ashikjhonson?tab=repositories"
          target="_blank"
        >
          <span className="px-3 2xl:px-6 py-2 2xl:py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
            View More
          </span>
        </a>
      </div>
    </div>
  );
}
