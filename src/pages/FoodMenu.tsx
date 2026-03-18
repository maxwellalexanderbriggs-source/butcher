import React from 'react';
import { MenuPageTemplate } from '@/src/components/MenuPageTemplate';

const foodSections = [
  {
    title: 'Small Plates',
    items: [
      {
        id: '1',
        name: 'Wild Venison Tartare',
        description: 'Hand-cut venison, juniper berry oil, cured egg yolk, toasted rye.',
        details: 'Our venison is sourced from the northern highlands, aged for 14 days to develop a deep, gamey flavor that pairs perfectly with our house-cured egg yolks and traditional rye bread.',
        price: '$24',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
        likes: 124
      },
      {
        id: '2',
        name: 'Roasted Bone Marrow',
        description: 'Parsley salad, capers, sourdough, smoked sea salt.',
        details: 'Served piping hot from the hearth, our bone marrow is a rich, buttery delicacy. The brightness of the caper and parsley salad cuts through the richness for a balanced start to your meal.',
        price: '$22',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=600',
        likes: 89
      }
    ]
  },
  {
    title: 'From The Hearth',
    items: [
      {
        id: '3',
        name: 'Hearth-Fired Trout',
        description: 'Local trout, brown butter, sage, wild mushrooms.',
        details: 'Caught fresh from the local streams, our trout is cooked over open flames to achieve a delicate smoky finish. Served with a rich brown butter sauce and seasonal wild mushrooms.',
        price: '$38',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600',
        likes: 210
      },
      {
        id: '4',
        name: 'The Lodge Ribeye',
        description: '45-day dry-aged, tallow butter, charred leeks.',
        details: 'The centerpiece of our menu. This ribeye is dry-aged in-house for 45 days, resulting in an unparalleled depth of flavor. Finished with tallow butter and served with charred seasonal leeks.',
        price: '$65',
        image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=600',
        likes: 342
      }
    ]
  },
  {
    title: 'Garden & Earth',
    items: [
      {
        id: '5',
        name: 'Smoked Duck Breast',
        description: 'Cherry reduction, parsnip puree, wilted greens.',
        details: 'Slow-smoked over applewood, our duck breast is tender and flavorful. The tartness of the cherry reduction provides a sophisticated counterpoint to the earthy parsnip puree.',
        price: '$42',
        image: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&q=80&w=600',
        likes: 156
      },
      {
        id: '6',
        name: 'Wild Mushroom Risotto',
        description: 'Foraged mushrooms, truffle oil, aged parmesan.',
        details: 'A creamy, comforting dish featuring a variety of foraged mushrooms. Finished with a drizzle of premium truffle oil and a generous grating of 24-month aged parmesan.',
        price: '$32',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=600',
        likes: 178
      }
    ]
  }
];

export const FoodMenu = () => {
  return (
    <MenuPageTemplate 
      title="Food Menu"
      subtitle="Rustic elegance on a plate"
      sections={foodSections}
      pdfUrl="/menus/food-menu.pdf"
    />
  );
};
