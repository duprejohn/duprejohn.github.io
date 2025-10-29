import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Endorsements } from "./components/Endorsements";
import { LinkedInCTA } from "./components/LinkedInCTA";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen text-gray-950 dark:text-gray-50" style={{ backgroundColor: '#cad1e0' }}>
      <Hero />
      <About />
      <Timeline />
      <Endorsements />
      <LinkedInCTA />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
}
