export interface ResourceItem {
  id: string;
  title: string;
  shortDesc: string;
  benefit: string;
  benefitsList?: string[];
  problemSolved?: string;
  badge?: string;
  iconName: string;
  imageSeed?: string;
}

export interface PillarCard {
  title: string;
  description: string;
  icon: string;
}

export interface BonusItem {
  title: string;
  description: string;
  icon: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'format' | 'age' | 'church' | 'payment';
}

export type Currency = 'EUR' | 'USD' | 'MXN' | 'COP';
