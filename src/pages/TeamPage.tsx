import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Mail, Linkedin } from "lucide-react";
import fatimaImg from "../assets/fatima.jpg";

export default function TeamPage() {
  const executiveBoard = [
    {
      name: "Fatima Ezzahrae Mahzoume ",
      role: "President",
      department: "2th year - Civil Engineering ",
      bio: "Leading the club's vision to connect students with industry opportunities.",
      image:fatimaImg
    },
    {
      name: "Hind Amzil",
      role: "Vice President",
      department: "42th year - Civil Engineering",
      bio: "Coordinating events and ensuring smooth club operations.",
      image: "https://images.unsplash.com/photo-1666558889375-798fa96b559a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBzdHVkZW50c3xlbnwxfHx8fDE3NTk5MjM5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Salma Abbou",
      role: "Secretary General",
      department: "2th year - Civil Engineering",
      bio: "Managing communications and documentation.",
      image: "https://images.unsplash.com/photo-1666558889375-798fa96b559a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBzdHVkZW50c3xlbnwxfHx8fDE3NTk5MjM5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    
    
  ];

  const committees = [
    {
      name: "Training  Committee",
      head: "Rajaa Dadda",
      members: [],
      description: "Organizing workshops, technical training sessions, and skill-development programs."
    },
    {
      name: "Sponsoring  Committee",
      head: "Imad Rejafellah",
      members: [],
      description: "Managing sponsorships, partnerships, and financial support for club activities."
    },
    {
      name: "Conference Committee",
      head: "Mariam Sabir ",
      members: [],
      description: "Planning conferences, seminars, and expert speaker events."
    },
    {
      name: "Vsit Committee",
      head: "Hajar Haddioui",
      members: [],
      description: "Coordinating industrial visits, company tours, and onsite learning experiences."
    },
    {
      name: "Media and Design  Committee",
      head: "Aya Rifi ",
      members: [],
      description: "Creating visual content, managing social media, and maintaining the club’s brand identity."
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Meet the dedicated students behind Club BTP EHTP, working to create opportunities and build connections in civil engineering.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Executive Board */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Executive Board</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our leadership team guiding the club's vision and operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {executiveBoard.map((member, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge className="mx-auto mt-2 bg-[#FFB700]">{member.role}</Badge>
                  <CardDescription className="mt-2">{member.department}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#FFB700] hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#FFB700] hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Committees */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Committees</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized teams working on different aspects of club activities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {committees.map((committee, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FFB700]"></div>
                    {committee.name}
                  </CardTitle>
                  <CardDescription>{committee.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Committee Head</p>
                      <p>{committee.head}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-2">Members</p>
                      <div className="flex flex-wrap gap-2">
                        {committee.members.map((member, memberIdx) => (
                          <Badge key={memberIdx} variant="outline">
                            {member}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#FFB700] to-[#E5A600] rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl mb-4">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in becoming part of Club BTP EHTP? We're always looking for passionate students to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#FFB700] rounded-lg hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
