export interface NavLink {
  label: string;
  href: string;
  i18nKey?: string;
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
