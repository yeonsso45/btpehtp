import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Building2, Award, Handshake, Mail } from "lucide-react";

// Import images properly for Vite
import hassaniaLogo from "../assets/hassania.png";
import welearnLogo from "../assets/welearn.png";
import casapressLogo from "../assets/casapress.png";
import elaouadLogo from "../assets/elaouad.png";
import hitradioLogo from "../assets/hitradio.png";
import avonLogo from "../assets/avon.png";
import btpnewsLogo from "../assets/btpnews.png";

export default function SponsorsPage() {

  const sponsorTiers = [
    {
      tier: "Official Sponsors",
      description: "Our partners supporting the BTP Club student initiatives",
      sponsors: [
        { name: "Hassania School of Public Works", industry: "Education", partnership: "Partner", logo: hassaniaLogo },
        { name: "Welearn", industry: "Education Platform", partnership: "Partner", logo: welearnLogo },
        { name: "Casapress", industry: "Media", partnership: "Partner", logo: casapressLogo },
        { name: "Elaouad Architecture", industry: "Architecture", partnership: "Partner", logo: elaouadLogo },
        { name: "Hit Radio", industry: "Media", partnership: "Partner", logo: hitradioLogo },
        { name: "Avon", industry: "Consumer Goods", partnership: "Partner", logo: avonLogo },
        { name: "BTP News", industry: "Construction Media", partnership: "Partner", logo: btpnewsLogo },
      ],
    },
  ];

  const benefits = [
    { icon: Award, title: "Recognition", description: "Showcase your brand to students and industry leaders." },
    { icon: Handshake, title: "Collaboration", description: "Work with engineering students on impactful initiatives." },
    { icon: Building2, title: "Visibility", description: "Gain exposure through our events and activities." },
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

        {/* Sponsor Tiers */}
        <div className="space-y-12">
          {sponsorTiers.map((tier, idx) => (
            <div key={idx}>
              <div className="text-center mb-8">
                <h2 className="text-3xl mb-2">{tier.tier}</h2>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tier.sponsors.map((sponsor, sIdx) => (
                  <Card key={sIdx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-full h-28 bg-white rounded-lg flex items-center justify-center mb-4 border">
  <img
    src={sponsor.logo}
    alt={sponsor.name}
    className="max-w-[120px] max-h-[70px] object-contain"
  />
</div>

                      <CardTitle>{sponsor.name}</CardTitle>
                      <CardDescription>{sponsor.industry}</CardDescription>
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

        {/* Benefits */}
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

        {/* CTA */}
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
