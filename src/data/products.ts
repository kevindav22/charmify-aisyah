export const products = [
  {
    code: 'CR-001',
    name: 'Rose Gold Butterfly',
    price: 189000,
    image: '/images/1.jfif',
    badge: 'Best Seller',
    category: 'butterfly',
  },
  {
    code: 'CR-002',
    name: 'Moonlight Charm',
    price: 219000,
    image: '/images/2.jfif',
    badge: 'Popular',
    category: 'moon',
  },
  {
    code: 'CR-003',
    name: 'Golden Memories',
    price: 249000,
    image: '/images/3.jfif',
    badge: 'Favorite',
    category: 'gold',
  },
  {
    code: 'CR-004',
    name: 'Sweet Blossom',
    price: 199000,
    image: '/images/4.jfif',
    badge: 'Trending',
    category: 'flower',
  },
];

export type Product = (typeof products)[number];
