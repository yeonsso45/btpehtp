import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Building2, Award, Handshake, Mail } from "lucide-react";

export default function SponsorsPage() {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      description: "Our premier partners supporting excellence in civil engineering education",
      sponsors: [
        { name: "LafargeHolcim Morocco", industry: "Cement & Construction Materials", partnership: "Since 2020" },
        { name: "Groupe TGCC", industry: "Construction & Engineering", partnership: "Since 2019" },
      ]
    },
    {
      tier: "Gold Sponsors",
      description: "Valued partners committed to student development",
      sponsors: [
        { name: "SGTM", industry: "Public Works & Infrastructure", partnership: "Since 2021" },
        { name: "LYDEC", industry: "Utilities & Infrastructure", partnership: "Since 2020" },
        { name: "Al Omrane", industry: "Real Estate Development", partnership: "Since 2021" },
      ]
    },
    {
      tier: "Silver Sponsors",
      description: "Supporting partners in our mission",
      sponsors: [
        { name: "Société Générale Marocaine de Construction", industry: "Construction", partnership: "Since 2022" },
        { name: "Bureau Veritas Morocco", industry: "Testing & Certification", partnership: "Since 2022" },
        { name: "NOVEC", industry: "Engineering Consulting", partnership: "Since 2023" },
        { name: "Soprema Maroc", industry: "Building Materials", partnership: "Since 2023" },
      ]
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Brand Visibility",
      description: "Logo placement on club materials, website, and event banners"
    },
    {
      icon: Handshake,
      title: "Talent Pipeline",
      description: "Early access to recruit talented EHTP engineering students"
    },
    {
      icon: Building2,
      title: "Industry Engagement",
      description: "Opportunities to present at events and connect with future engineers"
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">Our Partners</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We're grateful to our industry partners who support our mission to connect civil engineering students with real-world opportunities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Scrolling Partners Marquee */}
        <div className="mb-16">
          <div className="relative overflow-hidden py-8 bg-gray-50 rounded-lg">
            {/* Gradient overlays for smooth edge effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            
            <div className="flex animate-scroll-left">
              {/* First set */}
              {sponsorTiers.flatMap(tier => tier.sponsors).map((sponsor, idx) => (
                <div
                  key={`first-${idx}`}
                  className="flex-shrink-0 w-72 mx-4"
                >
                  <div className="bg-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all cursor-pointer p-6 border-2 border-gray-200 hover:border-[#FFB700] h-32">
                    <div className="text-center">
                      <Building2 className="w-10 h-10 text-[#FFB700] mx-auto mb-2" />
                      <p className="text-sm">{sponsor.name}</p>
                      <p className="text-xs text-gray-500">{sponsor.industry}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {sponsorTiers.flatMap(tier => tier.sponsors).map((sponsor, idx) => (
                <div
                  key={`second-${idx}`}
                  className="flex-shrink-0 w-72 mx-4"
                >
                  <div className="bg-white rounded-lg flex items-center justify-center hover:shadow-lg transition-all cursor-pointer p-6 border-2 border-gray-200 hover:border-[#FFB700] h-32">
                    <div className="text-center">
                      <Building2 className="w-10 h-10 text-[#FFB700] mx-auto mb-2" />
                      <p className="text-sm">{sponsor.name}</p>
                      <p className="text-xs text-gray-500">{sponsor.industry}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-12">
          {sponsorTiers.map((tier, idx) => (
            <div key={idx}>
              <div className="text-center mb-8">
                <h2 className="text-3xl mb-2">{tier.tier}</h2>
                <p className="text-gray-600">{tier.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.sponsors.map((sponsor, sponsorIdx) => (
                  <Card key={sponsorIdx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <Building2 className="w-12 h-12 text-[#FFB700]" />
                      </div>
                      <CardTitle>{sponsor.name}</CardTitle>
                      <CardDescription>
                        {sponsor.industry}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">{sponsor.partnership}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Partnership Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our growing network of industry partners and help shape the next generation of civil engineers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card key={idx} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#FFB700] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription className="mt-2">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#FFB700] to-[#E5A600] rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl mb-4">Become a Sponsor</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Club BTP EHTP to support civil engineering education and connect with talented future engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-[#FFB700] hover:bg-gray-100">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Sponsorship Package
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
