import React from 'react';
import { MenuPageTemplate } from '@/src/components/MenuPageTemplate';

const bevSections = [
  {
    title: 'Signature Cocktails',
    items: [
      {
        id: '1',
        name: 'The Wise Man Old Fashioned',
        description: 'House-blend bourbon, demerara, black walnut bitters, expressed orange.',
        details: 'Our signature take on the classic. We use a custom blend of three small-batch bourbons, paired with house-made demerara syrup and a unique black walnut bitter for a rich, nutty finish.',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600',
        likes: 452
      },
      {
        id: '2',
        name: 'Smoked Manhattan',
        description: 'Rye whiskey, sweet vermouth, cherry bitters, applewood smoke.',
        details: 'A theatrical experience. This Manhattan is smoked tableside with applewood chips, infusing the rye and vermouth with a delicate, lingering smokiness.',
        price: '$20',
        image: 'https://images.unsplash.com/photo-1587223962905-b28989d588a1?auto=format&fit=crop&q=80&w=600',
        likes: 312
      }
    ]
  },
  {
    title: 'Forgotten Classics',
    items: [
      {
        id: '3',
        name: 'Penicillin',
        description: 'Blended scotch, honey-ginger syrup, lemon, peated scotch float.',
        details: 'A modern classic that feels ancient. The spicy kick of honey-ginger syrup is balanced by fresh lemon and a float of heavily peated Islay scotch for an aromatic finish.',
        price: '$19',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600',
        likes: 289
      },
      {
        id: '4',
        name: 'Sazerac',
        description: 'Cognac, rye, absinthe rinse, peychauds, lemon peel.',
        details: 'The original cocktail. Served in an absinthe-rinsed glass, this blend of cognac and rye is a testament to the history of New Orleans mixology.',
        price: '$18',
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600',
        likes: 198
      }
    ]
  }
];

export const BevMenu = () => {
  return (
    <MenuPageTemplate 
      title="Beverage Menu"
      subtitle="Crafted cocktails & signature pours"
      sections={bevSections}
      pdfUrl="/menus/bev-menu.pdf"
    />
  );
};
