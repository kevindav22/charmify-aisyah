// types for hero
export type TypesCaraousel = {
  img: string[];
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

export type TypesProfile = {
  name: string;
  tagline: string;
  phone: string;
};

