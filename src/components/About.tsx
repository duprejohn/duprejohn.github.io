import { Briefcase, Sparkles, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div>
          <h2 className="text-4xl md:text-5xl mb-6">Background</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            I'm a product designer with over 6 years of experience transforming complex problems 
            into elegant, user-centered solutions. My approach blends strategic thinking with 
            meticulous craft, always putting the user at the heart of every decision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl">Design Excellence</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Award-winning designs recognized for innovation and user impact across multiple industries.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl">User-Centered</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Deep expertise in user research, testing, and creating experiences that resonate with real people.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-green-600 dark:text-green-300" />
            </div>
            <h3 className="text-xl">Cross-Functional</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Proven track record of collaborating with engineering, product, and business teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
