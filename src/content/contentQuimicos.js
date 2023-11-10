import imgTest from "../assets/cloro.webp";
import floculante from "../assets/granular.webp"

const contentQuimicos = [
  {
    id: 1,
    productName: "Dicloro",
    urlName: "dicloro",
    img: imgTest,
    category: "cloro",
    size: "Cuñete",
    messure: "litros",
    messureQuantity: 50,
    price: 999.9,
    description:
      "Este es el tipo de cloro más usado para comenzar con la limpieza del agua para tu alberca ",
    use: "",
    symbol: "$",
    currency: "MXN",
  },
  {
    id: 2,
    productName: "Floculante",
    urlName: "floculante",
    img: floculante,
    category: "cloro",
    size: "Cuñete",
    messure: "litros",
    messureQuantity: 50,
    price: 447.5,
    description:
      "Los flulantes siven para atrapar los elementos solidos suspendidos dentro del agua",
    use: "",
    symbol: "$",
    currency: "MXN",
  }
];

export default contentQuimicos;
