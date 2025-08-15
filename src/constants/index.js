import leader1 from '../assets/leader1.png';
import leader2 from '../assets/leader2.png';
import leader3 from '../assets/leader3.png';
import leader4 from '../assets/leader4.png';
import imgPlaceholder from '../assets/imgplaceholder.png';

// Leader data
export const LEADERS_DATA = [
  { image: leader1, name: 'REALTECH', skulls: 17, sol: 30 },
  { image: leader2, name: 'PSYCHOAZOV', skulls: 15, sol: 30 },
  { image: leader3, name: 'SSTS', skulls: 8, sol: 25 },
  { image: leader4, name: '38th AAMR', skulls: 11, sol: 25 },
];

// Image grid data
export const IMAGE_GRID_DATA = Array.from({ length: 8 }, (_, i) => ({
  src: imgPlaceholder,
  alt: `Placeholder ${i + 1}`,
}));

// Constants
export const GRID_SIZE = 4;
export const SCROLLING_TEXT_COUNT = 10;
