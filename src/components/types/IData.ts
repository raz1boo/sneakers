export interface ISneakersVariants {
  preview: string;
  top: string;
  bottom: string;
  twice: string;
  color: string;
  price: string;
  description: string;
  colaboration: string | null;
  bestSeller: boolean;
}

export interface ISneakersProps {
  brand: string;
  name: string;
  variants: ISneakersVariants[];
  id: string;
}
