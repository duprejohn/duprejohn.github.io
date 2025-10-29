import { useState } from "react";
import { experiences, type Experience } from "../data/experienceData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl mb-16">Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            experience={exp}
            isExpanded={expandedId === exp.id}
            onToggle={() => toggleExpanded(exp.id)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

interface TimelineItemProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

function TimelineItem({ experience, isExpanded, onToggle, index }: TimelineItemProps) {
  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent toggle when clicking the "Read more" link
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
  };

  return (
    <div>
      <Card className="hover:shadow-lg transition-shadow h-full" onClick={handleCardClick}>
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle>{experience.role}</CardTitle>
              <CardDescription className="mt-2">
                {experience.company} • {experience.period}
              </CardDescription>
            </div>
          </div>
          
          <ImageWithFallback
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-full h-32 mt-4 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
          />
          
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            {experience.description}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                Read less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Read more <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </CardHeader>

        {isExpanded && (
          <CardContent className="pt-0 space-y-6">
            <div className="border-t pt-6">
              <h4 className="text-lg mb-4">Case Study: {experience.caseStudy.title}</h4>
              
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-500">Challenge</span>
                  <p className="mt-1 text-gray-700 dark:text-gray-300">
                    {experience.caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-500">Solution</span>
                  <p className="mt-1 text-gray-700 dark:text-gray-300">
                    {experience.caseStudy.solution}
                  </p>
                </div>

                <div>
                  <span className="text-sm text-gray-500 dark:text-gray-500">Impact</span>
                  <ul className="mt-2 space-y-2">
                    {experience.caseStudy.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {experience.caseStudy.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
