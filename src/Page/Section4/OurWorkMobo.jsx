import IMG1 from "../../assets/product/22.avif";
import IMG2 from "../../assets/product/23.webp";
import IMG3 from "../../assets/product/24.png";
import IMG4 from "../../assets/product/25.jpeg";
import IMG5 from "../../assets/product/26.jpg";
import IMG6 from "../../assets/product/27.webp";
import IMG7 from "../../assets/product/28.avif";
import IMG8 from "../../assets/product/29.webp";
import IMG9 from "../../assets/product/30.jpeg";
import IMG10 from "../../assets/product/1.jpg";
import { useState } from "react";

function OurWorkMobile() {
  const [activeIndex, setActiveIndex] = useState(null);

  const products = [
    { img: IMG9, name: "Ceiling Speakers", span: 10 },
    { img: IMG1, name: "Wireless Microphone System", span: 15 },
    { img: IMG3, name: "Home Theatre", span: 10 },
    { img: IMG4, name: "Mixers", span: 15 },
    { img: IMG5, name: "Projectors", span: 10 },
    { img: IMG6, name: "Power Amplifiers", span: 10 },
    { img: IMG7, name: "Speakers", span: 15 },
    { img: IMG8, name: "Exhaust fan", span: 15 },
    { img: IMG2, name: "In-Wall Speakers", span: 10 },
    { img: IMG10, name: "Wall Mount Speakers", span: 10 },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  //
  return (
    <section className="ourWorks" id="projects" style={{ marginTop: "3rem" }}>
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
