export type Product = {
  name: string;
  code: string;
  size: string;
  material: string;
  color: string;
  price: string;
  imagePath: string;
};

export const products: Product[] = [
  { name: "BRM01", code: "BRM01", size: "Medium, L10 x H8", material: "Sabutan", color: "Black", price: "140€", imagePath: "/img/collection/BRM01.png" },
  { name: "BRA01", code: "BRA01", size: "Small, L10 x H9", material: "Sabutan", color: "Stripe Black/White", price: "130€", imagePath: "/img/collection/BRA01.png" },
  { name: "BRM02", code: "BRM02", size: "L5 x H4.5", material: "Sabutan", color: "Black", price: "130€", imagePath: "/img/collection/BRM02.png" },
  { name: "BRK01-A", code: "BRK01", size: "H12 x 3", material: "Buntal Fiber", color: "Black", price: "140€", imagePath: "/img/collection/BRK01-A.png" },
  { name: "BRK01-B", code: "BRK01", size: "H12 x 3", material: "Buntal Fiber", color: "Off-white", price: "140€", imagePath: "/img/collection/BRK01-B.png" },
  { name: "BRM03", code: "BRM03", size: "L14 x H10", material: "Sabutan", color: "Black", price: "140€", imagePath: "/img/collection/BRM03.png" },
  { name: "BRJ01", code: "BRJ01", size: "L11 x H8", material: "Buntal Fiber", color: "Black with White", price: "140€", imagePath: "/img/collection/BRJ01.png" },
  { name: "BRA02", code: "BRA02", size: "9x12", material: "Sabutan", color: "Pink", price: "140€", imagePath: "/img/collection/BRA02.png" },
  { name: "BASB01", code: "BASB01", size: "9.5x14", material: "Sabutan", color: "Red with Dark Brown Handle", price: "130€", imagePath: "/img/collection/BASB01.png" },
  { name: "BAS01-A", code: "BAS01", size: "8.5x10", material: "Sabutan", color: "Black with Blue", price: "120€", imagePath: "/img/collection/BAS01-A.png" },
  { name: "BAS01-B", code: "BAS01", size: "8.5x10", material: "Sabutan", color: "Black with Orange", price: "120€", imagePath: "/img/collection/BAS01-B.png" },
  { name: "BAP01", code: "BAP01", size: "10.5x12", material: "Pandan Leaves with Wood Handle", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAP01.png" },
  { name: "BAP02", code: "BAP02", size: "11x13.5", material: "Pandan Leaves", color: "Navy Blue", price: "120€", imagePath: "/img/collection/BAP02.png" },
  { name: "BAPS04", code: "BAPS04", size: "8.5x8.5", material: "Pandan Leaves", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAPS04.png" },
  { name: "BAPHP01", code: "BAPHP01", size: "11x15", material: "Handwoven Pandan", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAPHP01.png" },
  { name: "BAPT01", code: "BAPT01", size: "12x8", material: "Pandan Leaves", color: "Cream/Off-white Woven Accents", price: "120€", imagePath: "/img/collection/BAPT01.png" },
  { name: "BZ001", code: "BZ001", size: "10x11", material: "Sabutan", color: "Cream/Off-white Woven Accents", price: "140€", imagePath: "/img/collection/BZ001.png" },
  { name: "BZ002-A", code: "BZ002", size: "9x14", material: "Buntal Fiber", color: "Dark Brown / Black Stripes", price: "140€", imagePath: "/img/collection/BZ002-A.png" },
  { name: "BZ002-B", code: "BZ002", size: "9x14", material: "Sabutan", color: "Cream/Off-white Woven Accents", price: "140€", imagePath: "/img/collection/BZ002-B.png" },
  { name: "FP001", code: "FP001", size: "5.5x12", material: "Pandan", color: "Black/White Woven Accents", price: "110€", imagePath: "/img/collection/FP001.png" },
  { name: "MSb001-A", code: "MSb001", size: "9x8", material: "Pandan", color: "Black with White Woven Accents", price: "70€", imagePath: "/img/collection/Msb001-A.png" },
  { name: "MSb001-B", code: "MSb001", size: "9x8", material: "Pandan", color: "Black with White Woven Accents", price: "70€", imagePath: "/img/collection/Msb001-B.png" },
];

export const productMaterials = Array.from(
  new Set(products.map((product) => product.material))
);

export const productColors = Array.from(
  new Set(products.map((product) => product.color))
);
