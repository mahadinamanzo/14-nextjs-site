export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  priceFrom: number;
  icon: string;
}

const services: Service[] = [
  {
    slug: "brand-strategy",
    title: "Brand strategy",
    summary: "Find the focus and story that set your business apart.",
    description:
      "A clear brand gives every decision a direction. We work with you to uncover what makes your business matter, who it matters to, and how to communicate that with confidence.",
    features: [
      "Discovery and stakeholder workshops",
      "Audience and category research",
      "Positioning and brand narrative",
      "Messaging framework",
    ],
    priceFrom: 450000,
    icon: "✳",
  },
  {
    slug: "visual-identity",
    title: "Visual identity",
    summary: "Build a recognisable look with room to grow.",
    description:
      "We turn your strategy into a distinctive visual system that feels true to your business and works everywhere your audience meets you.",
    features: [
      "Logo and visual identity design",
      "Colour and typography system",
      "Brand asset suite",
      "Practical brand guidelines",
    ],
    priceFrom: 350000,
    icon: "◒",
  },
  {
    slug: "web-design",
    title: "Web design",
    summary: "Make the first click feel like the right one.",
    description:
      "We design clear, compelling websites around the people using them—bringing your story, content, and goals together in a thoughtful experience.",
    features: [
      "Website discovery and sitemap",
      "User journeys and wireframes",
      "Responsive interface design",
      "Developer-ready design handoff",
    ],
    priceFrom: 500000,
    icon: "↗",
  },
  {
    slug: "web-development",
    title: "Web development",
    summary: "Bring your new digital experience to life.",
    description:
      "From a focused company site to a more tailored web experience, we build accessible, responsive, and reliable websites ready to grow with you.",
    features: [
      "Responsive front-end development",
      "Content management setup",
      "Performance and accessibility checks",
      "Launch support and handover",
    ],
    priceFrom: 700000,
    icon: "⌘",
  },
  {
    slug: "digital-products",
    title: "Digital products",
    summary: "Make complex tools feel simple and useful.",
    description:
      "We help teams shape and design digital products that solve real user needs, from early product thinking through polished, testable interfaces.",
    features: [
      "Product discovery and direction",
      "User flows and prototyping",
      "Interface and interaction design",
      "Usability testing and iteration",
    ],
    priceFrom: 850000,
    icon: "⌁",
  },
  {
    slug: "growth-marketing",
    title: "Growth & creative",
    summary: "Turn a good idea into steady forward motion.",
    description:
      "Build momentum with a considered creative direction and practical campaigns designed to connect with the right people and support your next stage.",
    features: [
      "Campaign strategy and concepts",
      "Creative direction and content",
      "Digital campaign assets",
      "Measurement and optimisation plan",
    ],
    priceFrom: 400000,
    icon: "✦",
  },
];

export function getServices(): Service[] {
  return services;
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
