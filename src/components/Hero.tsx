import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1694521787162-5373b598945c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMHNpdGV8ZW58MXx8fHwxNzU5OTQ4NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6" style={{ fontFamily: "'Anton', sans-serif" }}>
          Club BTP EHTP
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto">
          Connecting civil engineering students with real-world projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#FFB700] hover:bg-[#E5A600] text-black px-8 py-6"
            asChild
          >
            <a href="https://forms.gle/6zycB3uxrqcpV9Wp6" target="_blank" rel="noopener noreferrer">
              Join Now
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 px-8 py-6"
            onClick={() => scrollToSection("events")}
          >
            Next Event
          </Button>
        </div>
      </div>
    </section>
  );
}
