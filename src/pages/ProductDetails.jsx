import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Footer from "../components/Footer"; // Footer importado aqui
import "./ProductDetails.css";

// Importando as imagens
import masculino1 from "../assets/masculino1.jpg";
import feminino1 from "../assets/feminino1.jpg";
import feminino2 from "../assets/feminino2.jpg";
import masculino22 from "../assets/masculino22.jpg";
import masculino23 from "../assets/masculino23.jpg";
import masculino24 from "../assets/masculino24.jpg";
import masculino3 from "../assets/masculino3.jpg";
import feminino3 from "../assets/feminino3.jpg";
import feminino04 from "../assets/feminino04.jpg";
import feminino05 from "../assets/feminino05.jpeg";
import Invictus from "../assets/Invictus.jpeg";
import ArmaniCode from "../assets/Armani Code.png";
import BossBottled from "../assets/Boss Bottled.jpeg";
import YEaudeParfum from "../assets/Y Eau de Parfum.jpeg";
import MusamanWhite from "../assets/importado2.jpg";
import million from "../assets/1million.jpg";
import naturahomem from "../assets/naturahomem.jpg";
import beyondthemoon from "../assets/beyondthemoon.jpg";

// Lista de produtos com imagens importadas
const products = [
  {
    id: 1,
    name: "Essencial Ato",
    description:
      "Essencial Ato é a fusão entre intensidade e elegância. Com notas marcantes e sofisticadas, essa fragrância traduz autenticidade e presença, perfeita para quem se expressa com atitude",
    image: masculino1,
    price: 200,
  },
  {
    id: 2,
    name: "Kaiak",
    description:
      "Kaiak é a fragrância que captura a energia e a liberdade do mar. Com notas frescas e revigorantes, ela transmite a sensação de aventura e renovação, ideal para quem busca conexão com a natureza e um estilo de vida dinâmico.",
    image: masculino22,
    price: 150,
  },
  {
    id: 3,
    name: "Club 6 Exclusive",
    description:
      "Club Exclusive é a essência da sofisticação e exclusividade. Com notas elegantes e envolventes, este perfume é perfeito para quem busca presença marcante e refinamento em cada detalhe.",
    image: masculino23,
    price: 250,
  },
  {
    id: 4,
    name: "Essencial Único",
    description:
      "Essencial Único revela a força da sua identidade em cada nota. Uma fragrância sofisticada e inesquecível, feita para quem deixa sua marca por onde passa.",
    image: masculino24,
    price: 400,
  },
  {
    id: 5,
    name: "Arbo",
    description:
      "Arbo é a conexão perfeita entre frescor e liberdade. Inspirado na natureza, sua fragrância revigorante traz a sensação de leveza e energia para o dia a dia.",
    image: masculino3,
    price: 500,
  },
  {
    id: 6,
    name: "Lily Eau de Parfum",
    description:
      "Lily Eau de Parfum é a essência da sofisticação e delicadeza. Com notas florais envolventes e um toque atemporal, essa fragrância exala feminilidade e elegância em cada detalhe.",
    image: feminino1,
    price: 300,
  },
  {
    id: 7,
    name: "GoodGirl",
    description:
      "Good Girl é a fusão perfeita entre poder e sedução. Com uma fragrância envolvente e sofisticada, é feita para mulheres confiantes que deixam sua marca por onde passam.",
    image: feminino2,
    price: 400,
  },
  {
    id: 8,
    name: "La Belle",
    description:
      "La Belle é a essência da feminilidade e sedução. Com notas envolventes e sofisticadas, essa fragrância exala elegância e irresistível charme, deixando um rastro inesquecível.",
    image: feminino3,
    price: 500,
  },
  {
    id: 9,
    name: " Lua XerJoff Eau",
    description:
      "Lua XerJoff Eau é a perfeita harmonia entre frescor e sofisticação. Com notas vibrantes e elegantes, essa fragrância exala charme e exclusividade, ideal para quem busca um toque de luxo no dia a dia.",
    image: feminino04,
    price: 100,
  },
  {
    id: 10,
    name: "Essencial Natura",
    description:
      "Essencial Natura é a expressão da sofisticação e intensidade. Com notas marcantes e elegantes, essa fragrância traduz personalidade e presença, perfeita para quem vive com autenticidade",
    image: feminino05,
    price: 350,
  },
  {
    id: 11,
    name: "Invictus",
    description:
      "Invictus é a essência da força e conquista. Com notas energéticas e intensas, essa fragrância é feita para o homem determinado, que busca sempre ultrapassar limites e deixar sua marca de vitória por onde passa.",
    image: Invictus,
    price: 200,
  },
  {
    id: 12,
    name: "Armani Code",
    description: "Armani, um perfume elegante e sedutor.",
    image: ArmaniCode,
    price: 250,
  },
  {
    id: 13,
    name: "Boss Bottled",
    description:
      "Boss Bottled é a fragrância da confiança e sofisticação. Com notas amadeiradas e especiadas, é ideal para o homem que busca elegância e poder em cada momento.",
    image: BossBottled,
    price: 250,
  },
  {
    id: 14,
    name: "Y Eau de Parfum",
    description:
      "Y Eau de Parfum é a fragrância da ousadia e sofisticação. Com notas frescas e amadeiradas, é perfeita para o homem moderno que busca equilíbrio entre força e elegância.",
    image: YEaudeParfum,
    price: 200,
  },
  {
    id: 15,
    name: "Musaman White Intense",
    description:
      "Musaman White Intense é a fragrância da frescor e intensidade. Com notas cítricas e amadeiradas, transmite uma sensação de energia e sofisticação, ideal para quem busca intensidade em cada momento.",
    image: MusamanWhite,
    price: 200,
  },
  {
    id: 16,
    name: "Natura Homem",
    description:
      "Perfume masculino com notas amadeiradas e frescas, trazendo uma sensação de sofisticação e intensidade.",
    image: naturahomem,
    price: 200,
  },
  {
    id: 17,
    name: "Beyond the Moon",
    description:
      "Fragrância envolvente e misteriosa, com notas cítricas e florais, inspirada na imensidão e beleza da lua.",
    image: beyondthemoon,
    price: 200,
  },
  {
    id: 18,
    name: "1 Million",
    description:
      "Perfume marcante e luxuoso, com uma combinação quente e picante de notas de canela, couro e ambar.",
    image: million,
    price: 200,
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <section className="product-details">
        <img
          src={product.image}
          alt={product.name}
          className="product-image-large"
        />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>R${product.price}</p>

        <button onClick={() => addToCart(product)}>
          Adicionar ao Carrinho
        </button>
        <button onClick={() => navigate(-1)}>Voltar</button>
      </section>
      <Footer /> {}
    </div>
  );
};

export default ProductDetails;
