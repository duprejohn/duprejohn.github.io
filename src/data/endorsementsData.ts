export interface Endorsement {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
}

export const endorsements: Endorsement[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "VP of Product",
    company: "TechCorp Innovation Labs",
    image: "https://images.unsplash.com/photo-1570170609489-43197f518df0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE2OTEyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Working with this designer was transformative for our product. Their ability to balance user needs with business goals is exceptional. The AI dashboard redesign exceeded all our expectations."
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Head of Design",
    company: "Digital Ventures Co.",
    image: "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTcxOTE4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "A rare combination of creative vision and analytical thinking. The mobile banking app redesign not only looked beautiful but drove significant business results. A true design leader."
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "CEO",
    company: "Startup Studios",
    image: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE3NTgxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "An outstanding designer who consistently delivers pixel-perfect work with deep user empathy. Their contribution to our e-learning platform was instrumental in winning multiple design awards."
  }
];
