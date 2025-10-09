import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { FileText, Download, BookOpen, Video, ExternalLink } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      category: "Study Materials",
      icon: BookOpen,
      items: [
        { title: "Topographie", type: "PDF", size: "2.5 MB", file: "Topographie.pdf", year: 2025 },
        { title: "Probability", type: "PDF", size: "1.8 MB", file: "Probability.pdf", year: 2024 },
        { title: "Geotechnical Engineering Handbook", type: "PDF", size: "3.2 MB", file: "Geotechnical.pdf", year: 2023 },
        { title: "Construction Management Basics", type: "PDF", size: "1.5 MB", file: "ConstructionBasics.pdf", year: 2025 },
      ],
    },
    {
      category: "Video Tutorials",
      icon: Video,
      items: [
        { title: "AutoCAD for Civil Engineers", type: "Video", duration: "45 min", file: "AutoCAD.mp4" },
        { title: "ETABS Tutorial Series", type: "Video", duration: "2 hours", file: "ETABS.mp4" },
        { title: "SAP2000 Introduction", type: "Video", duration: "30 min", file: "SAP2000.mp4" },
        { title: "BIM Fundamentals", type: "Video", duration: "1 hour", file: "BIM.mp4" },
      ],
    },
    {
      category: "Reference Documents",
      icon: FileText,
      items: [
        { title: "Moroccan Building Code (RPS 2000)", type: "PDF", size: "5.1 MB", file: "RPS2000.pdf" },
        { title: "Eurocode 2 - Design of Concrete Structures", type: "PDF", size: "4.3 MB", file: "Eurocode2.pdf" },
        { title: "AASHTO Standards", type: "PDF", size: "6.8 MB", file: "AASHTO.pdf" },
        { title: "Safety Regulations Handbook", type: "PDF", size: "2.1 MB", file: "SafetyHandbook.pdf" },
      ],
    },
  ];

  const externalLinks = [
    { name: "EHTP Library", url: "#", description: "Access the school's digital library" },
    { name: "Civil Engineering Journals", url: "#", description: "Latest research and publications" },
    { name: "Software Resources", url: "#", description: "Download trial versions and student licenses" },
    { name: "Industry Standards", url: "#", description: "International construction standards" },
  ];

  // State
  const [selectedYear, setSelectedYear] = useState<number | "All">("All");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Access study materials, tutorials, and reference documents to support your civil engineering education.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:gap-4 space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <label className="font-semibold">Filter by Year:</label>
            <select
              value={selectedYear}
              onChange={(e) =>
                setSelectedYear(e.target.value === "All" ? "All" : parseInt(e.target.value))
              }
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="All">All</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="font-semibold">Search:</label>
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 w-full md:w-64"
            />
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resources.map((category, idx) => {
            const Icon = category.icon;

            const filteredItems = category.items.filter(
              (item) =>
                (selectedYear === "All" || item.year === selectedYear) &&
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredItems.length === 0) return null;

            return (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FFB700] rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map((item, itemIdx) => (
                    <Card key={itemIdx} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>
                          {item.type} • {"size" in item ? item.size : item.duration}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        {item.file ? (
                          <a href={`/resources/${item.file}`} download>
                            <Button className="w-full bg-[#FFB700] hover:bg-[#E5A600] flex items-center justify-center">
                              <Download className="w-4 h-4 mr-2" />
                              {item.file}
                            </Button>
                          </a>
                        ) : (
                          <Button
                            className="w-full bg-gray-400 cursor-not-allowed flex items-center justify-center"
                            disabled
                          >
                            <Download className="w-4 h-4 mr-2" />
                            No file
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* External Links */}
        <div className="mt-16">
          <h2 className="text-3xl mb-6">External Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalLinks.map((link, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{link.name}</CardTitle>
                      <CardDescription className="mt-2">{link.description}</CardDescription>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#FFB700]" />
                  </div>
                </CardHeader>
                <CardContent>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full border-[#FFB700] text-[#FFB700] hover:bg-[#FFB700] hover:text-white"
                    >
                      Visit Resource
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Request Section */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl mb-4">Need a specific resource?</h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Let us know and we'll try to add it to our collection.
          </p>
          <Button className="bg-[#FFB700] hover:bg-[#E5A600]">Request Resource</Button>
        </div>
      </div>
    </div>
  );
}
