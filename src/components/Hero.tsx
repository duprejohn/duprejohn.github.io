import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight" style={{ WebkitTextStroke: '2px black', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)' }}>
          <span style={{ color: '#e0cad1' }}>dupre</span><sup className="text-4xl md:text-5xl lg:text-6xl" style={{ color: '#d1e0ca' }}>xp</sup>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Crafting delightful digital experiences through human-centered design
        </p>
      </div>
      
      <button
        onClick={scrollToContent}
        className="absolute bottom-12 animate-bounce hover:text-gray-600 transition-colors"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
}
