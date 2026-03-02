export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface FabricInfo {
  id: string;
  name: string;
  description: string;
  careInstructions: string[];
}
