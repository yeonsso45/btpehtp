import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Calendar } from "lucide-react";

// Imported images
import sibImage from "../assets/sib-visit.jpg";
import conferenceImage from "../assets/conferenceImage.jpg";
import robotTraining from "../assets/robotTraining.jpg";
import victoriaVisit from "../assets/victoriaVisit.jpg";
import executionPlansTraining from "../assets/executionPlansTraining.jpg";
import civilEngineeringDay2025 from "../assets/civilEngineeringDay2025.jpg";
import roundTableGCDay2025 from "../assets/roundTableGCDay2025.jpg";
import chantierCasablanca2025 from "../assets/chantierCasablanca2025.jpg";
import cypecadTraining2025 from "../assets/cypecadTraining2025.jpg";
import portVisit2025 from "../assets/portVisit2025.jpg";
import waterManagementConf from "../assets/waterManagementConf.jpg";
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
    title: "Formation Robot Structural Analysis",
    category: "Formations",
    date: "Novembre 2024",
    image: robotTraining,
    description:
      "Le Club BTP EHTP a organisé une formation enrichissante sur le logiciel Robot Structural Analysis, animée par M. LAMRABT El Mahdi. Cette session a offert aux participants l’occasion de maîtriser les fonctionnalités avancées de cet outil essentiel pour l’analyse et la conception de structures. Un grand merci au formateur pour son partage de connaissances et à tous les participants pour leur engagement.\n\n#btpehtp #formation #RobotStructuralAnalysis",
  },
    {
  id: 4,
  title: "Visite de chantier – École Victoria, Bouskoura",
  category: "Visites de chantier",
  date: "18 Décembre 2024",
  image: victoriaVisit,
  description:
    "Le Club BTP EHTP a organisé une visite au chantier de construction d’une école à Victoria, Bouskoura, le 18 décembre 2024, sous la supervision de BH4C et guidée par M. Mohamed Hamza Benomar. Une expérience enrichissante qui rapproche nos membres des réalités du terrain.\n\n#btpehtp #chantier #GénieCivil",
},
    {
  id: 5,
  title: "Formation : Analyse d’un dossier de bâtiment",
  category: "Formations",
  date: "20 Décembre 2024",
  image: executionPlansTraining,
  description:
    "Le 20 décembre 2024, le Club BTP EHTP a organisé une formation captivante sous le thème : « Des plans architecturaux aux plans d’exécution : Tout ce qu’un ingénieur doit savoir pour analyser un dossier de bâtiment ». Un grand merci à Monsieur Zerriq Brahim pour son intervention inspirante et à tous les participants pour leur énergie et enthousiasme. BTP EHTP — we build the world 🖤🧡\n\n#btpehtp #FormationBTP #Ingénierie #Construction",
},
{
  id: 6,
  title: "Journée du Génie Civil – Édition 2025",
  category: "Événements",
  date: "19 Février 2025",
  image: civilEngineeringDay2025,
  description:
    "Le 19 février 2025, la communauté du génie civil s'est réunie pour une journée exceptionnelle organisée par BTP EHTP. L’événement a permis d’échanger, d’apprendre et de renforcer les liens entre étudiants, professionnels et passionnés du secteur. Une journée marquée par le partage de connaissances, l’innovation et la passion pour la construction et les grands projets d’infrastructure.\nUn immense merci à tous les intervenants, participants et organisateurs pour leur contribution au succès de cette édition.\n📸 Revivez les meilleurs moments en images et restez connectés pour découvrir les prochains temps forts !\n\n#BTP_EHTP #GénieCivil #Construction #Ingénierie #Innovation",
},
    {
  id: 7,
  title: "Table ronde – Journée Génie Civil 2025",
  category: "Événements",
  date: "19 Février 2025",
  image: roundTableGCDay2025,
  description:
    "Dans le cadre de la Journée Génie Civil, le Club BTP EHTP a organisé une table ronde le 19 février 2025 à l’École Hassania des Travaux Publics. Cette rencontre a offert une véritable opportunité de retour d’expérience, permettant à Mme Ouhdid Sanae, M. Zerriq Brahim et Mme Aderkaoui Narjis de partager leur expertise et de débattre sur des enjeux majeurs du secteur.\nUn échange enrichissant marqué par des discussions constructives et l’exploration de pistes d’innovation pour des infrastructures plus performantes et résilientes. Un immense merci aux intervenants et à tous les participants pour leur contribution au succès de cette table ronde.\n\n#BTPEHTP #EHTP #GénieCivil #Infrastructure",
},
    {
  id: 8,
  title: "Visite de chantier – Casablanca",
  category: "Site Visits",
  date: "8 Mars 2025",
  image: chantierCasablanca2025,
  description:
    "Le Club BTP EHTP a organisé une visite de chantier à Casablanca le samedi 8 mars 2025, encadrée par le Laboratoire Spécial des Travaux Publics. Les élèves ingénieurs ont découvert un projet de construction d’une résidence comprenant deux sous-sols, un rez-de-chaussée et trois étages, située sur un terrain en pente avec une différence de niveau de six mètres.\nCe chantier, géré par l’entreprise G3C, a permis d'analyser les défis géotechniques et structurels, ainsi que d’échanger directement avec des professionnels du secteur.\n\n#BTPehtp #EHTP #VisiteDeChantier #Construction #Ingénierie",
},
    {
  id: 9,
  title: "Formation CypeCAD",
  category: "Workshops",
  date: "Mars 2025",
  image: cypecadTraining2025,
  description:
    "Le Club BtpEHTP a organisé une session dédiée à CypeCAD, animée par M. Abdelhamid Belmaaris. Cette formation a permis d’explorer la conception, la modélisation et le dimensionnement des structures en génie civil.\nNous remercions M. Abdelhamid Belmaaris pour la qualité de son enseignement, ainsi que tous les participants pour leur engagement et leur implication.\n\n#btpehtp #FormationBTP #cypecad",
},
{
  id: 10,
  title: "Visite technique du port de Casablanca – Jetée Moulay Youssef",
  category: "Site Visits",
  date: "Mai 2025",
  image: portVisit2025,
  description:
    "Le Club BTP EHTP a eu l’honneur d'organiser, le 14 mai 2025, une visite technique du chantier de prolongement de la jetée Moulay Youssef au port de Casablanca, en partenariat avec l’Agence Nationale des Ports et la Direction des Ports et du Domaine Public Maritime. Cette immersion a permis aux membres du club de découvrir les aspects techniques, environnementaux et organisationnels d’un projet portuaire de grande envergure.\n\nCette expérience a été marquée par des échanges enrichissants avec les professionnels du chantier, offrant une meilleure compréhension des défis réels de l’ingénierie maritime.\n\nLe Club BTP EHTP remercie chaleureusement l’ANP et la DPDPM pour leur accueil ainsi que M. Aouiche Ismail pour son encadrement et son accompagnement précieux.\n\n#BTPEHTP #EHTP #ANP #PortDeCasablanca #IngénierieMaritime",
},
{
  id: 11,
  title: "Conférence : Gestion Participative de l’Eau",
  category: "Conferences",
  date: "Juin 2025",
  image: waterManagementConf,
  description:
    "Sous le thème « Gestion Participative de l’Eau : Entre Principes et Pratiques », le Club BTP EHTP a eu l’honneur de recevoir M. Hasnaoui Moulay Driss et M. El Rherari Aissa. Deux experts passionnés qui ont partagé leur vision et leur expérience autour d’une thématique essentielle et d’actualité.\n\nUn moment riche en échanges, permettant d’approfondir la compréhension des enjeux liés à la gestion durable des ressources hydriques.\n\n#btpehtp #conférence",
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
  {selectedImage !== null && (
    <DialogContent className="max-h-[90vh] overflow-y-auto p-0">
      <div className="flex flex-col">
        <img
  src={filteredItems[selectedImage].image}
  alt={filteredItems[selectedImage].title}
  className="max-w-[700px] max-h-[45vh] mx-auto w-full h-auto object-contain rounded-lg"
/>


        <div className="p-6 overflow-y-auto">
          <DialogTitle>{filteredItems[selectedImage].title}</DialogTitle>

          <DialogDescription className="whitespace-pre-line mt-2">
            {filteredItems[selectedImage].description}
          </DialogDescription>
        </div>
      </div>
    </DialogContent>
  )}
</Dialog>

      </div>
    </div>
  );
}
