import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Bridge Design Competition",
      description: "Annual competition where students design and model sustainable bridge structures.",
      category: "Competition",
    },
    {
      id: 2,
      title: "Urban Planning Initiative",
      description: "Collaborative project analyzing urban development challenges in Casablanca.",
      category: "Research",
    },
    {
      id: 3,
      title: "Construction Tech Showcase",
      description: "Exhibition of latest construction technologies and sustainable building methods.",
      category: "Exhibition",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Internship Opportunities</h2>
          <div className="w-24 h-1 bg-[#FFB700] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover exciting internship opportunities from leading companies in civil engineering and construction sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#FFB700]/20 to-gray-200 flex items-center justify-center">
                <div className="text-6xl text-[#FFB700]/40">BTP</div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-[#FFB700]/10 text-[#FFB700] rounded-full text-sm mb-3">
                  {project.category}
                </div>
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="flex items-center gap-2 text-[#FFB700] hover:gap-3 transition-all">
                  Learn More <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/internships"
            className="inline-block px-8 py-3 bg-[#FFB700] hover:bg-[#E5A600] text-black rounded-lg transition-colors"
          >
            View All Internships
          </Link>
        </div>
      </div>
    </section>
  );
}
