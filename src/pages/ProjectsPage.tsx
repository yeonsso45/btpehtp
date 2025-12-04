import { Building2, MapPin, Calendar, Clock, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";

const internships = [
  {
    id: 1,
    company: "Coming Soon",
    position: "Upcoming Civil Engineering Internship",
    type: "Summer Internship",
    duration: "TBA",
    location: "To be announced",
    startDate: "2025",
    description:
      "New internship opportunities will be published soon. Stay tuned for official announcements from partner companies.",
    requirements: ["Engineering student", "Motivated", "Open to learning"],
    category: "Construction",
    stipend: "TBA",
    logo: "https://via.placeholder.com/200x200.png?text=Coming+Soon",
    applicationDeadline: "TBA",
  },
  {
    id: 2,
    company: "Coming Soon",
    position: "Upcoming Infrastructure Internship",
    type: "Final Year Internship",
    duration: "TBA",
    location: "To be announced",
    startDate: "2025",
    description:
      "Infrastructure and public works internship offers will be added in collaboration with industry partners.",
    requirements: ["Engineering student", "Interest in infrastructure", "Teamwork"],
    category: "Infrastructure",
    stipend: "TBA",
    logo: "https://via.placeholder.com/200x200.png?text=Coming+Soon",
    applicationDeadline: "TBA",
  },
  {
    id: 3,
    company: "Coming Soon",
    position: "Upcoming Hydraulics Internship",
    type: "Summer Internship",
    duration: "TBA",
    location: "To be announced",
    startDate: "2025",
    description:
      "Hydraulic engineering internships will be announced soon in partnership with water management companies.",
    requirements: ["Hydraulics interest", "Analytical mindset"],
    category: "Hydraulics",
    stipend: "TBA",
    logo: "https://via.placeholder.com/200x200.png?text=Coming+Soon",
    applicationDeadline: "TBA",
  },
  {
    id: 4,
    company: "Coming Soon",
    position: "Upcoming BIM & Modeling Internship",
    type: "Technical Internship",
    duration: "TBA",
    location: "To be announced",
    startDate: "2025",
    description:
      "BIM and digital modeling internship positions will be shared once confirmations are received from partners.",
    requirements: ["Interest in BIM", "Willingness to learn"],
    category: "BIM & Technology",
    stipend: "TBA",
    logo: "https://via.placeholder.com/200x200.png?text=Coming+Soon",
    applicationDeadline: "TBA",
  },
  {
    id: 5,
    company: "Coming Soon",
    position: "Upcoming Quality Control Internship",
    type: "Summer Internship",
    duration: "TBA",
    location: "To be announced",
    startDate: "2025",
    description:
      "Quality control and inspection internships will be added soon for students interested in materials and standards.",
    requirements: ["Attention to detail", "Motivated"],
    category: "Quality Control",
    stipend: "TBA",
    logo: "https://via.placeholder.com/200x200.png?text=Coming+Soon",
    applicationDeadline: "TBA",
  },
  {
    id: 6,
    company: "Coming Soon",
    position: "Upcoming Transportation Engineering Internship",
    type: "Final Year Internship",
    duration: "TBA",
    location: "To be announced",
    startDate: "2025",
    description:
      "Transportation and mobility engineering internship opportunities will be posted soon for interested students.",
    requirements: ["Interest in transportation", "Engineering background"],
    category: "Transportation",
    stipend: "TBA",
    logo: "https://via.placeholder.com/200x200.png?text=Coming+Soon",
    applicationDeadline: "TBA",
  },
  {
    id: 7,
    company: "Coming Soon",
    position: "Upcoming Urban Planning Internship",
    type: "Summer Internship",
    duration: "TBA",
    location: "To be announced",
    startDate: "2025",
    description:
      "Urban planning and smart city-related internship offers will be published soon.",
    requirements: ["Research skills", "Interest in planning"],
    category: "Urban Planning",
    stipend: "TBA",
    logo: "https://via.placeholder.com/200x200.png?text=Coming+Soon",
    applicationDeadline: "TBA",
  },
  {
    id: 8,
    company: "Coming Soon",
    position: "Upcoming Geotechnical Internship",
    type: "Technical Internship",
    duration: "TBA",
    location: "To be announced",
    startDate: "2025",
    description:
      "Geotechnical engineering internship opportunities will be shared as soon as they are available.",
    requirements: ["Interest in soil & foundations", "Teamwork"],
    category: "Geotechnical",
    stipend: "TBA",
    logo: "https://via.placeholder.com/200x200.png?text=Coming+Soon",
    applicationDeadline: "TBA",
  },
];


export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredInternships = internships.filter((internship) => {
    const categoryMatch = selectedCategory === "all" || internship.category === selectedCategory;
    const typeMatch = selectedType === "all" || internship.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const categories = ["all", ...Array.from(new Set(internships.map(i => i.category)))];
  const types = ["all", ...Array.from(new Set(internships.map(i => i.type)))];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Briefcase className="w-12 h-12 text-[#FFB700]" />
              <h1 className="text-4xl md:text-5xl">Internship Opportunities</h1>
            </div>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Discover internship opportunities from leading companies in civil engineering, construction, and infrastructure sectors
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="w-full sm:w-64">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-64">
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Internship Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type === "all" ? "All Types" : type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="text-gray-600">
              <p>{filteredInternships.length} opportunities available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internships Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {filteredInternships.map((internship) => (
              <Card key={internship.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <ImageWithFallback
                        src={internship.logo}
                        alt={internship.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <CardTitle className="flex-1 line-clamp-2">{internship.position}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building2 className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{internship.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#FFB700] text-white hover:bg-[#E5A600]">
                      {internship.type}
                    </Badge>
                    <Badge variant="outline">{internship.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="mb-4">{internship.description}</CardDescription>
                  
                  <div className="space-y-3 mb-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{internship.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{internship.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{internship.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <GraduationCap className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{internship.stipend}</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm mb-2">
                        <strong>Requirements:</strong>
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {internship.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-[#FFB700] mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                      <p className="text-sm text-amber-800">
                        <strong>Application Deadline:</strong> {internship.applicationDeadline}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button className="w-full bg-[#FFB700] hover:bg-[#E5A600] text-white">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredInternships.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No internships found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedType("all");
                }}
                className="mt-4"
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Info Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 mt-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4">How to Apply for Internships</h2>
              <p className="text-lg opacity-90 mb-6">
                Club BTP EHTP partners with leading companies to provide exclusive internship opportunities for our members. 
                To apply, make sure you're a registered club member and have your CV and portfolio ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#FFB700] hover:bg-[#E5A600] text-white" asChild>
                  <a href="https://forms.gle/6zycB3uxrqcpV9Wp6" target="_blank" rel="noopener noreferrer">
                    Become a Member
                  </a>
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Application Guidelines
                </Button>
              </div>
            </div>
          </div>

          {/* Companies Section */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="mb-3">Partner Companies</h2>
              <p className="text-gray-600">
                We collaborate with industry-leading companies to bring you the best internship opportunities
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from(new Set(internships.map(i => i.company))).slice(0, 8).map((company, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow">
                  <p className="text-center text-sm">{company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
