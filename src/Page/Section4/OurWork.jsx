import IMG1 from "../../assets/product/1.jpg";
import IMG2 from "../../assets/product/2.jpg";
import IMG3 from "../../assets/product/3.jpg";
import IMG4 from "../../assets/product/4.jpg";
import IMG5 from "../../assets/product/5.jpg";
import IMG6 from "../../assets/product/6.jpg";
import IMG7 from "../../assets/product/7.jpg";
import IMG8 from "../../assets/product/8.jpg";
import IMG9 from "../../assets/product/9.jpg";
import IMG10 from "../../assets/product/10.jpg";

function OurWork() {
  const products = [
    { img: IMG1, name: "air curtain", span: 10 },
    { img: IMG2, name: "Ceiling Mount Speakers", span: 15 },
    { img: IMG3, name: "digital Mixer", span: 10 },
    { img: IMG4, name: "mixer Amplifier", span: 15 },
    { img: IMG5, name: "video Projector", span: 10 },
    { img: IMG6, name: "wall Mount Speaker ", span: 10 },
    { img: IMG7, name: "wireless Microhpone", span: 15 },
    { img: IMG8, name: "Exhaust fan", span: 15 },
    { img: IMG9, name: "roof extractor", span: 10 },
    { img: IMG10, name: "table fan", span: 10 },
  ];

  return (
    <section className="ourWorks" id="projects">
      <div className="ourWorks-container">
        <h1 className="ourWorks-container-title">Our Product Line</h1>
        <div className="grid-section">
          {products.map((product, index) => (
            <div
              key={index}
              className="card"
              style={{
                gridRow: `span ${product.span}`,
                position: "relative",
              }}
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

export default OurWork;
