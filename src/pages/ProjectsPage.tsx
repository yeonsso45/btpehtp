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
    company: "LafargeHolcim Maroc",
    position: "Civil Engineering Intern - Construction Site",
    type: "Summer Internship",
    duration: "2-3 months",
    location: "Casablanca",
    startDate: "July 2025",
    description: "Join our team on major construction projects. Gain hands-on experience in project management, quality control, and site operations.",
    requirements: ["3rd year student or above", "AutoCAD proficiency", "French & Arabic fluency"],
    category: "Construction",
    stipend: "4,500 MAD/month",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    applicationDeadline: "May 15, 2025",
  },
  {
    id: 2,
    company: "ONCF (National Railway Office)",
    position: "Railway Infrastructure Engineering Intern",
    type: "Final Year Internship",
    duration: "4-6 months",
    location: "Rabat",
    startDate: "February 2025",
    description: "Work on high-speed rail expansion projects. Participate in structural design, track engineering, and infrastructure planning.",
    requirements: ["Final year student", "Structural analysis knowledge", "Project management basics"],
    category: "Infrastructure",
    stipend: "5,000 MAD/month",
    logo: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    applicationDeadline: "December 20, 2024",
  },
  {
    id: 3,
    company: "LYDEC",
    position: "Water Distribution Network Intern",
    type: "Summer Internship",
    duration: "2 months",
    location: "Casablanca",
    startDate: "June 2025",
    description: "Support the hydraulics engineering team in water network maintenance, flow analysis, and infrastructure improvement projects.",
    requirements: ["2nd year or above", "Hydraulics coursework completed", "Strong analytical skills"],
    category: "Hydraulics",
    stipend: "4,000 MAD/month",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    applicationDeadline: "April 30, 2025",
  },
  {
    id: 4,
    company: "TGCC (Grande Casablanca Construction)",
    position: "BIM Modeling & Coordination Intern",
    type: "Technical Internship",
    duration: "3 months",
    location: "Casablanca",
    startDate: "March 2025",
    description: "Work with our BIM team on large-scale commercial projects. Learn Revit, Navisworks, and collaborative digital construction workflows.",
    requirements: ["Basic BIM knowledge", "Revit or similar software", "3D modeling interest"],
    category: "BIM & Technology",
    stipend: "3,500 MAD/month",
    logo: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    applicationDeadline: "January 31, 2025",
  },
  {
    id: 5,
    company: "Bureau Veritas Morocco",
    position: "Quality Control & Inspection Intern",
    type: "Summer Internship",
    duration: "2-3 months",
    location: "Multiple Sites",
    startDate: "July 2025",
    description: "Assist in quality inspections, material testing, and compliance verification for construction projects across Morocco.",
    requirements: ["Materials engineering background", "Attention to detail", "Willingness to travel"],
    category: "Quality Control",
    stipend: "4,200 MAD/month",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    applicationDeadline: "May 1, 2025",
  },
  {
    id: 6,
    company: "ADM (Autoroutes du Maroc)",
    position: "Highway Engineering Project Intern",
    type: "Final Year Internship",
    duration: "5-6 months",
    location: "Berrechid",
    startDate: "January 2025",
    description: "Participate in highway expansion and maintenance projects. Gain experience in roadway design, geotechnical analysis, and traffic engineering.",
    requirements: ["Final year student", "Transportation engineering course", "Field work readiness"],
    category: "Transportation",
    stipend: "5,500 MAD/month",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    applicationDeadline: "November 30, 2024",
  },
  {
    id: 7,
    company: "Egis International",
    position: "Urban Planning & Development Intern",
    type: "Summer Internship",
    duration: "2 months",
    location: "Casablanca",
    startDate: "June 2025",
    description: "Support urban development projects including smart city initiatives, sustainable transportation, and urban regeneration planning.",
    requirements: ["Urban planning interest", "GIS software basics", "Research skills"],
    category: "Urban Planning",
    stipend: "4,800 MAD/month",
    logo: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    applicationDeadline: "April 15, 2025",
  },
  {
    id: 8,
    company: "Menard Morocco",
    position: "Geotechnical Engineering Intern",
    type: "Technical Internship",
    duration: "3 months",
    location: "Tangier",
    startDate: "March 2025",
    description: "Work on ground improvement and foundation projects. Learn soil testing, ground reinforcement techniques, and foundation design.",
    requirements: ["Geotechnical coursework", "Lab experience preferred", "English proficiency"],
    category: "Geotechnical",
    stipend: "4,500 MAD/month",
    logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
    applicationDeadline: "February 1, 2025",
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
