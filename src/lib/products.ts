export type Product = {
  name: string;
  code: string;
  size: string;
  material: string;
  color: string;
  price: string;
  imagePath: string;
  description?: string;
};

export const products: Product[] = [
  { name: "Diva", code: "BRM01", size: "Medium, L10 x H8", material: "Sabutan", color: "Black", price: "140€", imagePath: "/img/collection/BRM01.png", description: "a handcrafted woven bayong handbag with a bold black and white design, vibrant blue accents and elegant details." },
  { name: "Eleganz", code: "BRA01", size: "Small, L10 x H9", material: "Sabutan", color: "Stripe Black/White", price: "130€", imagePath: "/img/collection/BRA01.png", description: "Handcrafted Bayong bag featuring a stylish woven design with a chic fashion-inspired pattern and convenient top handle." },
  { name: "Rosenliebe", code: "BRM02", size: "L5 x H4.5", material: "Sabutan", color: "Black", price: "130€", imagePath: "/img/collection/BRM02.png", description: "Handcrafted Bayong bag with striking black woven design, a beautiful pink rose motif, and an elegant red and gold chain handle." },
  { name: "BRK01-A", code: "BRK01", size: "H12 x 3", material: "Buntal Fiber", color: "Black", price: "140€", imagePath: "/img/collection/BRK01-A.png", description: ""},
  { name: "Blütenlieb", code: "BRK01", size: "H12 x 3", material: "Buntal Fiber", color: "Off-white", price: "140€", imagePath: "/img/collection/BRK01-B.png", description: "handcrafted bayong bag with a charming floral design, woven details and elegant cream and black woven." },
  { name: "Blümenpoesie", code: "BRM03", size: "L14 x H10", material: "Sabutan", color: "Black", price: "140€", imagePath: "/img/collection/BRM03.png", description: "Handcrafted Bayong bag with a striking floral design, woven details, and elegant black handles." },
  { name: "Nachtperle", code: "BRJ01", size: "L11 x H8", material: "Buntal Fiber", color: "Black with White", price: "140€", imagePath: "/img/collection/BRJ01.png", description: "Handcrafted Bayong bag with an elegant black and white woven pattern, a stylish gold tone clasp, and a graceful woman design." },
  { name: "Künstblüte", code: "BRA02", size: "9x12", material: "Sabutan", color: "Pink", price: "140€", imagePath: "/img/collection/BRA02.png", description: "Handcrafted Bayong bag featuring a vibrant artistic design with a beautiful woman, floral details, and a natural wooden handle." },
  { name: "Blütenzauber", code: "BASB01", size: "9.5x14", material: "Sabutan", color: "Red with Dark Brown Handle", price: "130€", imagePath: "/img/collection/BASB01.png", description: "Handcrafted bayong bag with colorful floral design and elegant brown handle." },
  { name: "Nachtblüte", code: "BAS01", size: "8.5x10", material: "Sabutan", color: "Black with Blue", price: "120€", imagePath: "/img/collection/BAS01-A.png", description: "handcrafted Bayong bag with an elegant floral design, woven detailing and stylish black and blue finish." },
  { name: "Sonnenblüte", code: "BAS01", size: "8.5x10", material: "Sabutan", color: "Black with Orange", price: "120€", imagePath: "/img/collection/BAS01-B.png", description: "Handcrafted Bayong bag featuring a striking orange floral design on a black woven base, with elegant handles and a gold-tone clasp." },
  { name: "BAP01", code: "BAP01", size: "10.5x12", material: "Pandan Leaves with Wood Handle", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAP01.png" },
  { name: "Luna", code: "BAP02", size: "11x13.5", material: "Pandan Leaves", color: "Navy Blue", price: "120€", imagePath: "/img/collection/BAP02.png", description: "a handcrafted woven bayong featuring a colorful Filipina inspired design." },
  { name: "Blütenpracht", code: "BAP03", size: "15x10", material: "Pandan leaves with wood handle", color: "Pink", price: "120€", imagePath: "/img/collection/BAP03.png", description: "Handcrafted Bayong bag with a vibrant woven pattern, colorful floral design, and a natural wooden handle." },
  { name: "BAPS04", code: "BAPS04", size: "8.5x8.5", material: "Pandan Leaves", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAPS04.png" },
  { name: "Sonnenglück", code: "BAPHP01", size: "11x15", material: "Handwoven Pandan", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAPHP01.png", description: "Handcrafted Bayong bag with bright sunflower design, colorful plaid detail." },
  { name: "BAPT01", code: "BAPT01", size: "12x8", material: "Pandan Leaves", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAPT01.png" },
  { name: "Zitronenzauber", code: "BZ001", size: "10x11", material: "Sabutan", color: "Cream/Off-white Woven Accents", price: "140€", imagePath: "/img/collection/BZ001.png", description: "Handcrafted bayong bag with a charming lemon and a floral design, woven texture and an elegant cream colored handle." },
  { name: "BZ002-A", code: "BZ002", size: "9x14", material: "Buntal Fiber", color: "Dark Brown / Black Stripes", price: "140€", imagePath: "/img/collection/BZ002-A.png" },
  { name: "BZ002-B", code: "BZ002", size: "9x14", material: "Sabutan", color: "Cream/Off-white Woven Accents", price: "140€", imagePath: "/img/collection/BZ002-B.png" },
  { name: "Amara", code: "FP001", size: "5.5x12", material: "Pandan", color: "Black/White Woven Accents", price: "110€", imagePath: "/img/collection/FP001.png", description: "Handcrafted Bayong bag with braided shoulder strap and an elegant brown-and-cream diamond pattern." },
  { name: "VB002", code: "VB002", size: "9x16", material: "Pandan", color: "Brown woven accents", price: "120€", imagePath: "/img/collection/VB002.png" },
  { name: "Handwoven clutch-A", code: "Handwoven-Clutch", size: "4x8", material: "Pandan", color: "Multicolor and off white woven accents", price: "35€", imagePath: "/img/collection/HandwovenClutch-A.png", description: "Handcrafted Bayong bag with colorful woven details and a chic off-white accent palette." },
  { name: "Handwoven clutch-B", code: "Handwoven-Clutch", size: "4x8", material: "Pandan", color: "Multicolor and off white woven accents", price: "35€", imagePath: "/img/collection/HandwovenClutch-B.png", description: "Handcrafted Bayong bag with colorful woven details and a chic off-white accent palette." },
  { name: "MSb001-A", code: "MSb001", size: "9x8", material: "Pandan", color: "Black with White Woven Accents", price: "70€", imagePath: "/img/collection/Msb001-A.png" },
  { name: "MSb001-B", code: "MSb001", size: "9x8", material: "Pandan", color: "Black with White Woven Accents", price: "70€", imagePath: "/img/collection/Msb001-B.png" },
  { name: "Luna blu", code: "BATS05", size: "8.5x10.5", material: "Sabutan", color: "Natural beige/tan woven body; Black flap and handle; Blue main design; Multicolor flower accent", price: "120€", imagePath: "/img/collection/BATS05.png", description: "featuring an elegant blue fashion-inspired design and a colorful handmade flower detail. A unique statement accessory that combines traditional Filipino craftsmanship with modern style." },
];

export const productMaterials = Array.from(
  new Set(products.map((product) => product.material))
);

export const productColors = Array.from(
  new Set(products.map((product) => product.color))
);
