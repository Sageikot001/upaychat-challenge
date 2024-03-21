// types.ts
export type CardType = 'standard' | 'premium' | 'vip';

export interface CardContentProps {
  image: string;
  benefits: string[];
  description: string;
  price: number;
}
