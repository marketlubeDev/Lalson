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

function OurWork() {
  const products = [
    { img: IMG1, name: "Mixer Amplifiers", span: 10 },
    { img: IMG2, name: "Counter System", span: 15 },
    { img: IMG3, name: "In wall speakers", span: 10 },
    { img: IMG4, name: "Electric Fans", span: 15 },
    { img: IMG5, name: "Digital Mixer", span: 10 },
    { img: IMG6, name: "PA System", span: 10 },
    { img: IMG7, name: "Radio", span: 15 },
    { img: IMG8, name: "STEINBERG ", span: 15 },
    { img: IMG9, name: "STUDIOMASTER", span: 10 },
    { img: IMG10, name: "Video Projector", span: 10 },
  ];

  return (
    <section className="ourWorks" id="projects">
      <div className="ourWorks-container">
        <h1 className="ourWorks-container-title">Our Products</h1>
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
