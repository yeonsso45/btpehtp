import { Building2, Users, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">About Club BTP EHTP</h2>
          <div className="w-24 h-1 bg-[#FFB700] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The Club BTP EHTP is a dynamic student organization at École Hassania des Travaux Publics (EHTP) 
            in Casablanca, Morocco, dedicated to bridging the gap between academic learning and professional practice 
            in civil engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#FFB700] rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3">Technical Visits</h3>
            <p className="text-gray-600">
              Organize site visits to major construction projects, giving students hands-on exposure to 
              real-world civil engineering applications.
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#FFB700] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3">Conferences & Workshops</h3>
            <p className="text-gray-600">
              Host industry professionals and alumni who share insights on current trends, technologies, 
              and career opportunities in civil engineering.
            </p>
          </div>

          <div className="text-center p-8 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#FFB700] rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3">Professional Network</h3>
            <p className="text-gray-600">
              Build connections between students, alumni, and industry leaders to create lasting 
              professional relationships and mentorship opportunities.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-12 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2 text-[#FFB700]">500+</div>
              <p className="text-xl">Active Members</p>
            </div>
            <div>
              <div className="text-5xl mb-2 text-[#FFB700]">50+</div>
              <p className="text-xl">Events Per Year</p>
            </div>
            <div>
              <div className="text-5xl mb-2 text-[#FFB700]">20+</div>
              <p className="text-xl">Partner Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
