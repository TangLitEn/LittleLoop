export const CONTACT = Object.freeze({
  orders: 'qqqianhoo@gmail.com',
  support: 'tangliten512@gmail.com',
});

export function assetPath(filename) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/${filename}`;
}

export const ENQUIRY_ITEMS = [
  { value: 'A general enquiry', label: 'Just saying hello / a question' },
  { value: 'The flower pouch' },
  { value: 'The coffee companion' },
  { value: 'The froggy coaster' },
  { value: 'The rose basket' },
  { value: 'A custom idea' },
  { value: 'Help with an order' },
];
