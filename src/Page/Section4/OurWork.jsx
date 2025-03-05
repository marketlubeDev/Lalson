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
    { img: IMG1, name: "Lectern or Podium", span: 10 },
    { img: IMG2, name: "In wall speakers", span: 15 },
    { img: IMG3, name: "Electric Fans", span: 10 },
    { img: IMG4, name: "Sing Along karaoke", span: 15 },
    { img: IMG5, name: "HDMI cables", span: 10 },
    { img: IMG6, name: "STUDIOMASTER ", span: 10 },
    { img: IMG7, name: "Speakers", span: 15 },
    { img: IMG8, name: "Video Projector ", span: 15 },
    { img: IMG9, name: "Radio", span: 10 },
    { img: IMG10, name: "Counter Communication", span: 10 },
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
