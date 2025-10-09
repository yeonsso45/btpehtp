import { Users, Target, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6">About Club BTP EHTP</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Bridging the gap between academic excellence and professional practice in civil engineering
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-16 h-16 bg-[#FFB700] rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower civil engineering students at École Hassania des Travaux Publics (EHTP) by providing 
                hands-on experiences, industry connections, and professional development opportunities. We strive 
                to create a dynamic community where students can explore real-world applications of their 
                academic knowledge.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#FFB700] rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become the leading student organization in Morocco for civil engineering excellence, 
                recognized for producing industry-ready professionals who contribute to the development of 
                sustainable infrastructure and innovative construction practices across the nation and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our club organizes diverse activities designed to enhance your professional skills and expand your network
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FFB700] rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3">Technical Visits</h3>
              <p className="text-gray-600">
                Organized site visits to major construction projects, giving members firsthand exposure to 
                real-world engineering challenges and solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FFB700] rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3">Workshops & Conferences</h3>
              <p className="text-gray-600">
                Expert-led sessions on cutting-edge technologies, software tools, and industry best practices 
                relevant to modern civil engineering.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-[#FFB700] rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-3">Projects & Competitions</h3>
              <p className="text-gray-600">
                Hands-on projects and participation in national and international engineering competitions 
                to develop practical skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#FFB700]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl mb-2">500+</div>
              <div className="text-lg opacity-90">Active Members</div>
            </div>
            <div>
              <div className="text-4xl mb-2">50+</div>
              <div className="text-lg opacity-90">Annual Events</div>
            </div>
            <div>
              <div className="text-4xl mb-2">30+</div>
              <div className="text-lg opacity-90">Industry Partners</div>
            </div>
            <div>
              <div className="text-4xl mb-2">15+</div>
              <div className="text-lg opacity-90">Years Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our History</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2019, Club BTP EHTP emerged from a group of passionate civil engineering students 
                  who recognized the need for practical, industry-oriented experiences beyond the classroom.
                </p>
                <p>
                  Over the years, we've grown from a small student initiative to one of the most active and 
                  respected engineering clubs in Morocco. Our alumni network now includes successful engineers, 
                  project managers, and industry leaders working on major infrastructure projects worldwide.
                </p>
                <p>
                  Today, we continue to uphold our founding principles while adapting to the evolving needs of 
                  the civil engineering profession, incorporating sustainability, digital transformation, and 
                  innovative construction methodologies into our programs.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk5MzkyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
