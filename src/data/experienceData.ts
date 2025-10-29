export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  caseStudy: {
    title: string;
    challenge: string;
    solution: string;
    impact: string[];
    tags: string[];
  };
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Innovation Labs",
    role: "Senior Product Designer",
    period: "2023 - Present",
    description: "Leading design initiatives for next-generation AI-powered products, managing a team of 5 designers.",
    logo: "https://images.unsplash.com/photo-1661347998996-dcf102498c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYxNzM0Mzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      title: "AI Dashboard Redesign",
      challenge: "Users were overwhelmed by complex data visualizations and struggled to extract actionable insights from the platform.",
      solution: "Implemented a progressive disclosure approach with customizable widgets, intelligent defaults, and contextual help. Created a unified design system that reduced cognitive load by 40%.",
      impact: [
        "Increased user engagement by 65%",
        "Reduced time-to-insight by 45%",
        "Improved user satisfaction score from 3.2 to 4.7/5"
      ],
      tags: ["UX Research", "Design Systems", "Data Visualization", "AI/ML"]
    }
  },
  {
    id: "2",
    company: "Digital Ventures Co.",
    role: "Product Designer",
    period: "2021 - 2023",
    description: "Designed and shipped mobile-first experiences for fintech applications serving 2M+ users.",
    logo: "https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYnJhbmR8ZW58MXx8fHwxNzYxNjgxOTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      title: "Mobile Banking Reimagined",
      challenge: "Traditional banking app had low adoption among younger demographics and poor task completion rates.",
      solution: "Conducted extensive user research with Gen Z and Millennials, redesigned the information architecture, and introduced gamification elements. Built a card-based UI that prioritized frequently used features.",
      impact: [
        "400% increase in new user signups (18-34 age group)",
        "Reduced average task completion time by 60%",
        "App Store rating improved from 3.1 to 4.6"
      ],
      tags: ["Mobile Design", "Fintech", "User Research", "Prototyping"]
    }
  },
  {
    id: "3",
    company: "Startup Studios",
    role: "UX/UI Designer",
    period: "2019 - 2021",
    description: "Worked on diverse projects across e-commerce, healthcare, and education sectors.",
    logo: "https://images.unsplash.com/photo-1594235048794-fae8583a5af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlfGVufDF8fHx8MTc2MTY4MDYwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      title: "E-Learning Platform for Remote Education",
      challenge: "During the pandemic, traditional educational institutions needed rapid digital transformation but lacked engaging online experiences.",
      solution: "Designed an interactive learning platform with real-time collaboration tools, progress tracking, and adaptive learning paths. Focused on accessibility and inclusion.",
      impact: [
        "Platform adopted by 150+ educational institutions",
        "Student engagement rates 3x higher than competitors",
        "Won 'Best EdTech Design' award 2020"
      ],
      tags: ["EdTech", "Accessibility", "Collaboration Tools", "Web Design"]
    }
  },
  {
    id: "4",
    company: "Creative Agency Inc.",
    role: "Junior Designer",
    period: "2018 - 2019",
    description: "Created brand identities and digital experiences for startups and small businesses.",
    logo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeXxlbnwxfHx8fDE3NjE2ODE5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      title: "Brand Identity & Website for Eco Startup",
      challenge: "New sustainable products company needed to establish credibility and differentiate in a crowded market.",
      solution: "Developed a comprehensive brand identity rooted in environmental storytelling. Created a website that highlighted transparency, sustainability metrics, and product journey from source to customer.",
      impact: [
        "Successful product launch with 10k+ first-month sales",
        "Brand recognition increased by 250% in 6 months",
        "Featured in 'Top Sustainable Brands to Watch'"
      ],
      tags: ["Branding", "Web Design", "Sustainability", "Storytelling"]
    }
  },
  {
    id: "5",
    company: "InnovateSoft Solutions",
    role: "UX Designer",
    period: "2017 - 2018",
    description: "Designed enterprise software solutions for Fortune 500 companies, focusing on workflow optimization.",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGNvbXBhbnl8ZW58MXx8fHwxNzYxNzc4MjkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      title: "Enterprise Workflow Management System",
      challenge: "Large corporation needed to streamline complex approval processes across 15 departments with varying requirements.",
      solution: "Created a flexible, role-based workflow builder with customizable dashboards and automated notifications. Conducted workshops with stakeholders from each department to ensure all use cases were covered.",
      impact: [
        "Reduced approval time by 70% across all departments",
        "Saved an estimated $2M annually in operational costs",
        "Deployed to 5,000+ employees with 92% adoption rate"
      ],
      tags: ["Enterprise UX", "Workflow Design", "B2B", "System Design"]
    }
  },
  {
    id: "6",
    company: "Design Consultancy Group",
    role: "Design Intern",
    period: "2016 - 2017",
    description: "Supported senior designers on client projects ranging from mobile apps to web platforms.",
    logo: "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdWx0aW5nJTIwZmlybXxlbnwxfHx8fDE3NjE3NzgyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      title: "Healthcare Provider Mobile App",
      challenge: "Medical practice needed a patient-facing app to reduce phone call volume and improve appointment scheduling.",
      solution: "Designed an intuitive mobile experience focused on accessibility and HIPAA compliance. Simplified the appointment booking flow and added features for prescription refills and secure messaging.",
      impact: [
        "Phone call volume reduced by 45%",
        "Patient satisfaction score increased to 4.8/5",
        "No-show rate decreased by 30% with reminder system"
      ],
      tags: ["Healthcare", "Mobile Design", "Accessibility", "HIPAA"]
    }
  },
  {
    id: "7",
    company: "Studio Pixel",
    role: "Visual Designer",
    period: "2015 - 2016",
    description: "Focused on creating compelling visual designs and user interfaces for digital products.",
    logo: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW98ZW58MXx8fHwxNzYxNzU3ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      title: "E-Commerce Platform Redesign",
      challenge: "Outdated online store had high bounce rates and poor mobile conversion rates despite strong traffic.",
      solution: "Redesigned the entire shopping experience with a focus on product discovery, simplified checkout, and mobile optimization. Introduced a modern design language that aligned with the brand's premium positioning.",
      impact: [
        "Mobile conversion rate increased by 85%",
        "Cart abandonment reduced by 40%",
        "Average order value increased by 25%"
      ],
      tags: ["E-Commerce", "Visual Design", "Mobile First", "Conversion Optimization"]
    }
  },
  {
    id: "8",
    company: "TechFlow Innovations",
    role: "Product Design Intern",
    period: "2014 - 2015",
    description: "Assisted in designing features for a productivity and collaboration platform used by remote teams.",
    logo: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTc0NjcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      title: "Team Collaboration Dashboard",
      challenge: "Remote teams struggled with visibility into project status and team member availability across time zones.",
      solution: "Designed a real-time dashboard that aggregated project updates, availability status, and team activity. Created intuitive visualization of time zones and working hours to facilitate global collaboration.",
      impact: [
        "Team coordination efficiency improved by 50%",
        "Meeting scheduling conflicts reduced by 60%",
        "User engagement increased by 40%"
      ],
      tags: ["Collaboration Tools", "Dashboard Design", "Remote Work", "SaaS"]
    }
  },
  {
    id: "9",
    company: "Digital Innovation Lab",
    role: "UI/UX Design Apprentice",
    period: "2013 - 2014",
    description: "Learned foundational design principles while contributing to client projects and internal tools.",
    logo: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwbGFifGVufDF8fHx8MTc2MTc3ODI5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caseStudy: {
      title: "Content Management System UI",
      challenge: "Internal CMS was difficult to use, leading to frequent errors and low content publishing rates.",
      solution: "Redesigned the content editing interface with a focus on simplicity and error prevention. Introduced a preview mode, autosave functionality, and improved media management.",
      impact: [
        "Publishing errors reduced by 75%",
        "Content creation time cut in half",
        "Editor satisfaction score improved from 2.5 to 4.3/5"
      ],
      tags: ["CMS", "Content Design", "Internal Tools", "Usability"]
    }
  }
];
