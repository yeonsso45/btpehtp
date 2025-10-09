export function Sponsors() {
  const sponsors = [
    { id: 1, name: "Construction Corp" },
    { id: 2, name: "Engineering Solutions" },
    { id: 3, name: "BuildTech" },
    { id: 4, name: "Infrastructure Group" },
    { id: 5, name: "Urban Design Co" },
    { id: 6, name: "Concrete Industries" },
    { id: 7, name: "Steel Structures Ltd" },
    { id: 8, name: "Sustainable Build" },
  ];

  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Our Partners</h2>
          <div className="w-24 h-1 bg-[#FFB700] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're proud to partner with leading companies in the civil engineering and construction industry.
          </p>
        </div>

        {/* Scrolling Partners Animation */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient overlays for smooth edge effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex animate-scroll-left">
            {/* First set of sponsors */}
            {sponsors.map((sponsor) => (
              <div
                key={`first-${sponsor.id}`}
                className="flex-shrink-0 w-64 mx-6"
              >
                <div className="bg-gray-50 rounded-lg flex items-center justify-center hover:shadow-lg transition-all cursor-pointer p-8 border-2 border-gray-100 hover:border-[#FFB700] h-32">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#FFB700]/20 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-gray-600">{sponsor.name}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {sponsors.map((sponsor) => (
              <div
                key={`second-${sponsor.id}`}
                className="flex-shrink-0 w-64 mx-6"
              >
                <div className="bg-gray-50 rounded-lg flex items-center justify-center hover:shadow-lg transition-all cursor-pointer p-8 border-2 border-gray-100 hover:border-[#FFB700] h-32">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#FFB700]/20 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm text-gray-600">{sponsor.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-gray-50 p-12 rounded-2xl">
          <h3 className="text-3xl mb-4">Become a Partner</h3>
          <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
            Support the next generation of civil engineers and gain visibility among talented students.
          </p>
          <button className="px-8 py-3 bg-[#FFB700] hover:bg-[#E5A600] text-black rounded-lg transition-colors">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
