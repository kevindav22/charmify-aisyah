// types for hero
export type TypesCaraousel = {
  img: string[];
};

// types for customize
export interface Charm {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "luma-pink" | "luma-calm" | "luma-zodiac" | "luma-3d";
}

export type SelectedCharm = Charm & {
  instanceId: string;
  x: number;
  y: number;
  scale: number;
  rotate: number; // derajat, default 0
  zIndex: number;
};

//types profilData
export type TypesProfile = {
  name: string;
  tagline: string;
  phone: string;
  pesanUmum: string;
};
