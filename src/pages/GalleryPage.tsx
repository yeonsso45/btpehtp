import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Calendar } from "lucide-react";

// Imported images
import sibImage from "../assets/sib-visit.jpg";
import conferenceImage from "../assets/conferenceImage.jpg";
// Default fallback image for items without image yet
const defaultImage = "https://via.placeholder.com/600x400?text=No+Image+Available";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Visite au Salon International du Bâtiment (SIB)",
      category: "Site Visits",
      date: "November 2024",
      image: sibImage,
      description:
        "Le Club BTP EHTP a organisé le 23 novembre 2024 une visite au Salon International du Bâtiment (SIB), offrant aux étudiants l’opportunité de découvrir les innovations du secteur, d’échanger avec des experts et de renforcer leurs connaissances en ingénierie.",
    },
    {
    id: 2,
    title: "Conférence : L’innovation en matériaux de construction durables",
    category: "Conférences",
    date: "4 Décembre 2024",
    image: conferenceImage, 
    description:
      "Le mercredi 4 décembre, le club BTP EHTP a organisé une conférence enrichissante sous le thème « L’innovation en matériaux de construction durables ». Nous exprimons notre profonde gratitude à nos conférenciers, M. Rguig Mustapha, Mme Dialmy Atar et Mme Wiam Samir, pour leurs interventions inspirantes. Leur expertise a mis en lumière les enjeux et les innovations dans le domaine des matériaux de construction. Merci également à tous les participants pour leur présence et leur engagement. BTP EHTP — we build the world 🧡🖤 #btpehtp #ecolehassaniadestravauxpublics #conférence",
  },

    {
      id: 3,
      title: "Annual Engineering Conference",
      category: "Conferences",
      date: "January 2025",
      image: defaultImage,
      description:
        "Industry experts and students gathered for our annual conference discussing the future of civil engineering in Morocco.",
    },
    {
      id: 4,
      title: "Highway Construction Visit",
      category: "Site Visits",
      date: "December 2024",
      image: defaultImage,
      description:
        "Field trip to observe highway construction methods and traffic management systems.",
    },
    {
      id: 5,
      title: "BIM Software Training",
      category: "Workshops",
      date: "November 2024",
      image: defaultImage,
      description:
        "Intensive training session on Building Information Modeling (BIM) software and applications.",
    },
    {
      id: 6,
      title: "Sustainability in Construction Seminar",
      category: "Conferences",
      date: "October 2024",
      image: defaultImage,
      description:
        "Seminar featuring green building practices and sustainable construction methods.",
    },
    {
      id: 7,
      title: "Dam Engineering Site Visit",
      category: "Site Visits",
      date: "September 2024",
      image: defaultImage,
      description:
        "Exclusive tour of a major dam project, learning about hydraulic structures and water resource management.",
    },
    {
      id: 8,
      title: "AutoCAD Advanced Techniques",
      category: "Workshops",
      date: "September 2024",
      image: defaultImage,
      description:
        "Advanced AutoCAD workshop focusing on civil engineering drawings and 3D modeling.",
    },
    {
      id: 9,
      title: "Team Building Event",
      category: "Social Events",
      date: "August 2024",
      image: defaultImage,
      description:
        "Club members participating in team building activities to strengthen collaboration and networking.",
    },
  ];

  const categories = ["All", "Site Visits", "Workshops", "Conferences", "Social Events"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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
                  src={item.image || defaultImage}
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
                    src={filteredItems[selectedImage].image || defaultImage}
                    alt={filteredItems[selectedImage].title}
                    className="w-full rounded-lg object-cover"
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
