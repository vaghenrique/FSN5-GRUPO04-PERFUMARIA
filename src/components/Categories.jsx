import React, { useState, useEffect } from "react";
import "./Categories.css";

// Importação das imagens
import masc1 from "../assets/categoria-masculino1.jpg";
import masc2 from "../assets/categoria-masculino2.jpg";
import masc3 from "../assets/categoria-masculino3.jpg";
import fem1 from "../assets/categoria-perfume-feminino1.jpg";
import fem2 from "../assets/categoria-perfume-feminino2.jpg";
import fem3 from "../assets/categoria-perfume-feminino3.jpg";
import import1 from "../assets/importados1.jpg";
import import2 from "../assets/importados2.jpg";
import import3 from "../assets/importados3.jpg";

const categories = [
  {
    name: "PERFUMES MASCULINOS",
    link: "/masculinos",
    images: [masc1, masc2, masc3],
  },
  {
    name: "PERFUMES FEMININOS",
    link: "/femininos",
    images: [fem1, fem2, fem3],
  },
  {
    name: "PERFUMES IMPORTADOS",
    link: "/naturais",
    images: [import1, import2, import3],
  },
];

const Categories = () => {
  const [currentImages, setCurrentImages] = useState(
    categories.map((cat) => cat.images[0])
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) =>
        prevImages.map((img, index) => {
          const nextIndex =
            (categories[index].images.indexOf(img) + 1) %
            categories[index].images.length;
          return categories[index].images[nextIndex];
        })
      );
    }, 3000); // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="categories">
      <h2>Categorias</h2>
      <p>Encontre aquilo que procura!</p>
      <div className="cards-container">
        {categories.map((category, index) => (
          <a key={category.name} href={category.link} className="category-card">
            <img src={currentImages[index]} alt={category.name} />
            <h3>{category.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;
