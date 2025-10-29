import { Linkedin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function LinkedInCTA() {
  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/yourprofile", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <Card className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-95" />
        
        {/* Content */}
        <div className="relative z-10 p-12 md:p-16 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <Linkedin className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl mb-4">
            Let's Connect on LinkedIn
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join my network of designers, product managers, and innovators. 
            I regularly share insights on design thinking, UX strategies, and industry trends.
          </p>
          
          <Button
            onClick={handleLinkedInClick}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            Connect on LinkedIn
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="mt-6 text-sm text-blue-200">
            2,500+ connections • Available for consulting & speaking opportunities
          </p>
        </div>
      </Card>
    </section>
  );
}
