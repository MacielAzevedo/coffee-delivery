import expressoImage from "../assets/expresso.svg";
import americanoImage from "../assets/americano.svg";
import expressoCremosoImage from "../assets/expresso-cremoso.svg";
import expressoGeladoImage from "../assets/cafe-gelado.svg";
import cafeComLeiteImage from "../assets/cafe-com-leite.svg";
import latteImage from "../assets/latte.svg";
import capuccinoImage from "../assets/capuccino.svg";
import macchiatoImage from "../assets/macchiato.svg";
import mocaccinoImage from "../assets/mocaccino.svg";
import chocolateQuenteImage from "../assets/chocolate-quente.svg";
import cubanoImage from "../assets/cubano.svg";
import havaianoImage from "../assets/havaiano.svg";
import arabeImage from "../assets/arabe.svg";
import irlandesImage from "../assets/irlandes.svg";

export const coffees = [
  {
    id: 1,
    tags: [["Tradicional"]],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    photo: expressoImage,
    price: 9.9,
  },
  {
    id: 2,
    tags: ["Tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    photo: americanoImage,
    price: 9.9,
  },
  {
    id: 3,
    tags: ["Tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    photo: expressoCremosoImage,
    price: 9.9,
  },
  {
    id: 4,
    tags: ["Tradicional", "gelado"],
    name: "Expresso Gelado",
    description: "O tradicional café feito com água quente e grãos moídos",
    photo: expressoGeladoImage,
    price: 9.9,
  },
  {
    id: 5,
    tags: ["Tradicional", "com leite"],
    name: "Café com leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    photo: cafeComLeiteImage,
    price: 9.9,
  },
  {
    id: 6,
    tags: ["Tradicional", "com leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    photo: latteImage,
    price: 9.9,
  },
  {
    id: 7,
    tags: ["Tradicional", "com leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    photo: capuccinoImage,
    price: 9.9,
  },
  {
    id: 8,
    tags: ["Tradicional", "com leite"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    photo: macchiatoImage,
    price: 9.9,
  },
  {
    id: 9,
    tags: ["Tradicional", "com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    photo: mocaccinoImage,
    price: 9.9,
  },
  {
    id: 10,
    tags: ["Especial", "com leite"],
    name: "Chocolate quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    photo: chocolateQuenteImage,
    price: 9.9,
  },
  {
    id: 11,
    tags: ["Especial", "alcoólico", "gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    photo: cubanoImage,
    price: 9.9,
  },
  {
    id: 12,
    tags: ["Especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    photo: havaianoImage,
    price: 9.9,
  },
  {
    id: 13,
    tags: ["Especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    photo: arabeImage,
    price: 9.9,
  },
  {
    id: 14,
    tags: ["Especial", "alcoólico"],
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    photo: irlandesImage,
    price: 9.9,
  },
];
