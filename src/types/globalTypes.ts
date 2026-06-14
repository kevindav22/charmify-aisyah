// types for hero
export type HeroCarouselProps = {
  images: string[];
};

// types for customize
export type Charm = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
};

export type SelectedCharm = Charm & {
  instanceId: string;
};
