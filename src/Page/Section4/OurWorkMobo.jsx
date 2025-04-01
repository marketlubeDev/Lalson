import IMG1 from "../../assets/product/1.jpg";
import IMG2 from "../../assets/product/2.jpg";
import IMG3 from "../../assets/product/3.avif";
import IMG4 from "../../assets/product/4.avif";
import IMG5 from "../../assets/product/5.jpg";
import IMG6 from "../../assets/product/6.avif";
import IMG7 from "../../assets/product/7.avif";
import IMG8 from "../../assets/product/8.jpg";
import IMG9 from "../../assets/product/9.jpg";
import IMG10 from "../../assets/product/10.jpg";
import { useState } from "react";

function OurWorkMobile() {
  const [activeIndex, setActiveIndex] = useState(null);

  const products = [
    { img: IMG1, name: "air curtain", span: 12 },
    { img: IMG2, name: "Ceiling Mount Speakers", span: 12 },
    { img: IMG3, name: "digital Mixer", span: 12 },
    { img: IMG4, name: "mixer Amplifier", span: 12 },
    { img: IMG5, name: "video Projector", span: 12 },
    { img: IMG6, name: "wall Mount Speaker ", span: 12 },
    { img: IMG7, name: "wireless Microhpone", span: 12 },
    { img: IMG8, name: "Exhaust fan", span: 12 },
    { img: IMG9, name: "roof extractor", span: 12 },
    { img: IMG10, name: "table fan", span: 12 },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="ourWorks" id="projects">
      <div className="ourWorks-container">
        <h1 className="ourWorks-container-title">Our Product Line</h1>
        <div className="grid-section" id="home">
          {products.map((product, index) => (
            <div
              key={index}
              className={`card ${activeIndex === index ? "active" : ""}`}
              style={{
                gridRow: `span ${product.span}`,
                position: "relative",
              }}
              onClick={() => handleClick(index)}
            >
              <img
                src={product.img}
                alt={product.name}
                className="card-image"
                loading="lazy"
              />
              <div className="product-name">{product.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWorkMobile;
