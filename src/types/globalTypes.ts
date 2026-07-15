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
  category: 'luma-pink' | 'luma-calm' | 'luma-zodiac';
}

export type SelectedCharm = Charm & {
  instanceId: string;
};

//types profilData
export type TypesProfile = {
  name: string;
  tagline: string;
  phone: string;
  pesanUmum: string;
};

