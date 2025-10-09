import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Calendar } from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Construction Site Visit - Hassan II Bridge",
      category: "Site Visits",
      date: "March 2025",
      description: "Students exploring the construction of the new Hassan II Bridge in Casablanca, learning about modern bridge engineering techniques."
    },
    {
      id: 2,
      title: "Concrete Testing Workshop",
      category: "Workshops",
      date: "February 2025",
      description: "Hands-on laboratory session on concrete strength testing and quality control procedures."
    },
    {
      id: 3,
      title: "Annual Engineering Conference",
      category: "Conferences",
      date: "January 2025",
      description: "Industry experts and students gathered for our annual conference discussing the future of civil engineering in Morocco."
    },
    {
      id: 4,
      title: "Highway Construction Visit",
      category: "Site Visits",
      date: "December 2024",
      description: "Field trip to observe highway construction methods and traffic management systems."
    },
    {
      id: 5,
      title: "BIM Software Training",
      category: "Workshops",
      date: "November 2024",
      description: "Intensive training session on Building Information Modeling (BIM) software and applications."
    },
    {
      id: 6,
      title: "Sustainability in Construction Seminar",
      category: "Conferences",
      date: "October 2024",
      description: "Seminar featuring green building practices and sustainable construction methods."
    },
    {
      id: 7,
      title: "Dam Engineering Site Visit",
      category: "Site Visits",
      date: "September 2024",
      description: "Exclusive tour of a major dam project, learning about hydraulic structures and water resource management."
    },
    {
      id: 8,
      title: "AutoCAD Advanced Techniques",
      category: "Workshops",
      date: "September 2024",
      description: "Advanced AutoCAD workshop focusing on civil engineering drawings and 3D modeling."
    },
    {
      id: 9,
      title: "Team Building Event",
      category: "Social Events",
      date: "August 2024",
      description: "Club members participating in team building activities to strengthen collaboration and networking."
    },
  ];

  const categories = ["All", "Site Visits", "Workshops", "Conferences", "Social Events"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Gallery</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our collection of events, site visits, workshops, and memorable moments from Club BTP EHTP.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm ${
                activeCategory === category 
                  ? "bg-[#FFB700] hover:bg-[#E5A600]" 
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => setSelectedImage(idx)}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1741105820127-97dd1aaafe87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwcm9qZWN0JTIwZ2FsbGVyeXxlbnwxfHx8fDE3NTk5NDkzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#FFB700]">{item.category}</Badge>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Dialog */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage !== null && (
              <>
                <DialogHeader>
                  <DialogTitle>{filteredItems[selectedImage].title}</DialogTitle>
                  <DialogDescription className="flex items-center gap-2 mt-2">
                    <Badge className="bg-[#FFB700]">{filteredItems[selectedImage].category}</Badge>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {filteredItems[selectedImage].date}
                    </span>
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1741105820127-97dd1aaafe87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwcm9qZWN0JTIwZ2FsbGVyeXxlbnwxfHx8fDE3NTk5NDkzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt={filteredItems[selectedImage].title}
                    className="w-full rounded-lg"
                  />
                  <p className="mt-4 text-gray-600">{filteredItems[selectedImage].description}</p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
