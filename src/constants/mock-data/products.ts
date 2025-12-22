type ProductsType = {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}[];

export const products: ProductsType = [
  {
    id: 1,
    name: "Cappuccino",
    img: "/src/assets/images/Cappuccino.png",
    price: 3.5,
    quantity: 0,
  },
  {
    id: 2,
    name: "Latte",
    img: "/src/assets/images/Latte.png",
    price: 4,
    quantity: 0,
  },
  {
    id: 3,
    name: "Espresso",
    img: "/src/assets/images/Espresso.png",
    price: 2.5,
    quantity: 0,
  },
  {
    id: 4,
    name: "Mocha",
    img: "/src/assets/images/Mocha.png",
    price: 4.5,
    quantity: 0,
  },
  {
    id: 5,
    name: "Americano",
    img: "/src/assets/images/Americano.png",
    price: 3,
    quantity: 0,
  },
];
