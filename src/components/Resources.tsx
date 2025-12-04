import { BookOpen, FileText, Video, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Resources() {
  const resources = [
    {
      id: 1,
      icon: BookOpen,
      title: "Study Materials",
      description: "Access course notes, textbooks, and study guides curated by senior students.",
      items: "120+ Files",
    },
    {
      id: 2,
      icon: FileText,
      title: "Technical Documents",
      description: "Industry standards, building codes, and technical specifications for reference.",
      items: "80+ Documents",
    },
    {
      id: 3,
      icon: Video,
      title: "Video Tutorials",
      description: "Recorded workshops, software tutorials, and conference presentations.",
      items: "50+ Videos",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Resources</h2>
          <div className="w-24 h-1 bg-[#FFB700] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Access a comprehensive library of educational materials, technical documents, and learning resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#FFB700] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.items}</span>
                  <Button
  asChild
  variant="ghost"
  size="sm"
  className="text-[#FFB700] hover:text-[#E5A600] hover:bg-[#FFB700]/10"
>
  <a href="#/resources">
    <Download className="w-4 h-4 mr-2" />
    Browse
  </a>
</Button>

                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Members have exclusive access to all resources. Not a member yet?
          </p>
          <Button className="bg-[#FFB700] hover:bg-[#E5A600] text-black" asChild>
            <a href="https://forms.gle/6zycB3uxrqcpV9Wp6" target="_blank" rel="noopener noreferrer">
              Join the Club
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
