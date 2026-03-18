import React from 'react';
import { MenuPageTemplate } from '@/src/components/MenuPageTemplate';

const spiritSections = [
  {
    title: 'The Rare Vault',
    items: [
      {
        id: '1',
        name: 'Pappy Van Winkle 23yr',
        description: 'The holy grail of bourbon. Rich oak, dark chocolate, and deep vanilla.',
        details: 'A legendary wheated bourbon. The 23-year aging process results in a complex, multi-layered spirit with notes of dried fruit, spice, and a long, smooth finish.',
        price: '$150 / 1oz',
        image: 'https://images.unsplash.com/photo-1527281405159-35d5b9a1650c?auto=format&fit=crop&q=80&w=600',
        likes: 892
      },
      {
        id: '2',
        name: 'Macallan 25yr Sherry Oak',
        description: 'Classic Speyside. Dried fruits, ginger, and wood smoke.',
        details: 'Aged exclusively in hand-picked sherry seasoned oak casks from Jerez, Spain. This 25-year-old single malt is a masterpiece of balance and depth.',
        price: '$120 / 1oz',
        image: 'https://images.unsplash.com/photo-1597290282695-edc43d0e7129?auto=format&fit=crop&q=80&w=600',
        likes: 645
      }
    ]
  },
  {
    title: 'Global Archives',
    items: [
      {
        id: '3',
        name: 'Hibiki 21yr',
        description: 'Japanese harmony. Sweet honeycomb, apricot, and mizunara oak.',
        details: 'A blend of rare malts from Yamazaki and Hakushu, aged in various casks including rare Japanese Mizunara oak. A delicate, floral, and incredibly balanced whisky.',
        price: '$95 / 1oz',
        image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=600',
        likes: 532
      },
      {
        id: '4',
        name: 'WhistlePig The Boss Hog',
        description: 'Bold rye. Complex spice, maple, and toasted marshmallow.',
        details: 'A powerhouse of a rye whisky. Each edition of The Boss Hog is a unique experiment in finishing, resulting in a bold, spicy, and unforgettable spirit.',
        price: '$85 / 1oz',
        image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=600',
        likes: 421
      }
    ]
  }
];

export const SpiritList = () => {
  return (
    <MenuPageTemplate 
      title="Spirit List"
      subtitle="An archive of the world's finest whiskies"
      sections={spiritSections}
      pdfUrl="/menus/spirit-list.pdf"
    />
  );
};
