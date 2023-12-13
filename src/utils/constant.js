export const SIZE = [
  { id: 1, title: "S" },
  { id: 2, title: "M" },
  { id: 3, title: "L" },
  { id: 4, title: "XL" },
  { id: 5, title: "XXL" },
  { id: 6, title: "XXL" },
];
export const imagesForSlider = [
  {
    id: 1,
    img: require('../assets/slider1.png'),
  },
  {
    id: 2,
    img: require('../assets/slider2.png')
  },
  {
    id: 3,
    img: require('../assets/slider3.png')
  }
]

export const categories = [
  { id: 1, image: getImageFromURL(IMAGES.MEN), title: "Man" },
  { id: 2, image: getImageFromURL(IMAGES.WOMEN), title: "Women" },
  { id: 3, image: getImageFromURL(IMAGES.UNISEX), title: "Unisex" },
  { id: 4, image: getImageFromURL(IMAGES.BLUESTONE), title: "New Arrivals" },
  { id: 5, image: getImageFromURL(IMAGES.BAGSCAT), title: "Bags" },
  { id: 6, image: getImageFromURL(IMAGES.SHOOCAT), title: "Shoes" },
  { id: 7, image: getImageFromURL(IMAGES.BEAUTY), title: "Beauty\nproducts" },
];

 export const brands = [
  { id: 1, image: getImageFromURL(IMAGES.BLUESTONE), title: "Blundstone" },
  { id: 2, image: getImageFromURL(IMAGES.HUGO), title: "Hugo Boss" },
  { id: 3, image: getImageFromURL(IMAGES.BOTEGA), title: "Bottega Veneta" },
  { id: 4, image: getImageFromURL(IMAGES.CK), title: "Calvin Klein" },
  { id: 5, image: getImageFromURL(IMAGES.CARRR), title: "Carrera" },
  { id: 6, image: getImageFromURL(IMAGES.BOTEGA), title: "Guess" },
];

export const products = [
  {
    id: 1,
    image: getImageFromURL(IMAGES.CLOTH_DUMMY),
    name: "4WRD by Dressberry",
    price: 500,
    shortDetail: "Men Blue-Coloured Solid Tailored Jacket",
    offer: "20% off",
    discount: 20,
  },
  {
    id: 2,
    image: getImageFromURL(IMAGES.SHOO),
    name: "4WRD by Dressberry",
    price: 500,

    name: "MI Super Bass Bluetooth Wireless Headphones",
    price: "$30",
    shortDetail: "Short detail 2",
    offer: "10% off",
    discount: 10,
  },
  {
    id: 3,
    image: getImageFromURL(IMAGES.CLOTH_DUMMY),
    name: "MI Super Bass Bluetooth Wireless Headphones",
    price: 500,
    shortDetail: "Short detail 1",
    offer: "20% off",
    discount: 20,
  },
  {
    id: 4,
    image: getImageFromURL(IMAGES.SHOO),
    name: "MI Super Bass Bluetooth Wireless Headphones",
    price: 300,
    shortDetail: "Short detail 2",
    offer: "10% off",
    discount: 10,
  },
  {
    id: 5,
    image: getImageFromURL(IMAGES.SHOO),
    name: "MI Super Bass Bluetooth Wireless Headphones",
    price: 300,
    shortDetail: "Short detail 2",
    offer: "10% off",
    discount: 10,
  },
  {
    id: 6,
    image: getImageFromURL(IMAGES.CLOTH_DUMMY),
    name: "4WRD by Dressberry",
    price: 500,
    shortDetail: "Men Blue-Coloured Solid Tailored Jacket",
    offer: "20% off",
    discount: 20,
  },
  // Add more products as needed
];