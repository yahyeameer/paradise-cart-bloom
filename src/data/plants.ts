import { Plant } from '@/contexts/CartContext';
import lavenderImg from '@/assets/lavender.jpg';
import rosemaryImg from '@/assets/rosemary.jpg';
import mintImg from '@/assets/mint.jpg';
import basilImg from '@/assets/basil.jpg';
import aloeImg from '@/assets/aloe.jpg';
import chamomileImg from '@/assets/chamomile.jpg';
import calendulaImg from '@/assets/calendula.jpg';

export const plants: Plant[] = [
  {
    id: 1,
    name: 'Lavender',
    description: 'Aromatic herb known for its calming scent and beautiful purple flowers. Perfect for relaxation and sleep.',
    price: 14.99,
    image: lavenderImg,
    category: 'aromatic',
  },
  {
    id: 2,
    name: 'Rosemary',
    description: 'Fragrant culinary herb with needle-like leaves. Excellent for cooking and adding fresh aroma to your home.',
    price: 12.99,
    image: rosemaryImg,
    category: 'aromatic',
  },
  {
    id: 3,
    name: 'Mint',
    description: 'Refreshing aromatic herb with bright green leaves. Great for teas, cocktails, and natural air freshening.',
    price: 9.99,
    image: mintImg,
    category: 'aromatic',
  },
  {
    id: 4,
    name: 'Basil',
    description: 'Sweet aromatic herb essential for Italian cuisine. Fresh, flavorful leaves perfect for pesto and salads.',
    price: 11.99,
    image: basilImg,
    category: 'aromatic',
  },
  {
    id: 5,
    name: 'Aloe Vera',
    description: 'Medicinal succulent with healing properties. Soothes burns, moisturizes skin, and purifies air.',
    price: 16.99,
    image: aloeImg,
    category: 'medicinal',
  },
  {
    id: 6,
    name: 'Chamomile',
    description: 'Gentle medicinal herb with daisy-like flowers. Known for calming properties and digestive benefits.',
    price: 13.99,
    image: chamomileImg,
    category: 'medicinal',
  },
  {
    id: 7,
    name: 'Calendula',
    description: 'Vibrant medicinal flower with anti-inflammatory properties. Used for skin care and wound healing.',
    price: 15.99,
    image: calendulaImg,
    category: 'medicinal',
  },
];
