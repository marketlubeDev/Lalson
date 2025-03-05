import IMG1 from "../../assets/product/amplifier.webp";
import IMG2 from "../../assets/product/counter.webp";
import IMG3 from "../../assets/product/inWall.webp";
import IMG4 from "../../assets/product/fan.webp";
import IMG5 from "../../assets/product/mixer.webp";
import IMG6 from "../../assets/product/PA.webp";
import IMG7 from "../../assets/product/radio.webp";
import IMG8 from "../../assets/product/stainberge.webp";
import IMG9 from "../../assets/product/studioMaster.webp";
import IMG10 from "../../assets/product/videoProject.webp";
import { useState } from "react";

function OurWorkMobile() {
  const [activeIndex, setActiveIndex] = useState(null);

  const products = [
    { img: IMG1, name: "Amplifier", span: 12 },
    { img: IMG2, name: "Counter", span: 12 },
    { img: IMG3, name: "In Wall Speaker", span: 12 },
    { img: IMG4, name: "Fan", span: 12 },
    { img: IMG5, name: "Mixer", span: 12 },
    { img: IMG6, name: "PA System", span: 12 },
    { img: IMG7, name: "Radio", span: 12 },
    { img: IMG8, name: "Steinberg", span: 12 },
    { img: IMG9, name: "Studio Master", span: 12 },
    { img: IMG10, name: "Video Projector", span: 12 },
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
