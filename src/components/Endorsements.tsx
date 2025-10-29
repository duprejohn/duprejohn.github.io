import { endorsements } from "../data/endorsementsData";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote } from "lucide-react";

export function Endorsements() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl mb-4">Endorsements</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-16 max-w-2xl">
        What colleagues and collaborators have to say about working together.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {endorsements.map((endorsement) => (
          <Card key={endorsement.id} className="relative">
            <CardContent className="pt-6">
              <Quote className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4 opacity-50" />
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{endorsement.quote}"
              </p>

              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={endorsement.image}
                  alt={`${endorsement.name} headshot`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900 dark:text-gray-100">
                    {endorsement.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {endorsement.role}, {endorsement.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
