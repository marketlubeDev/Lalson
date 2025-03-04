import img1 from "../../assets/logos/aditya.png";
import img2 from "../../assets/logos/airIndia.png";
import img3 from "../../assets/logos/alhind.png";
import img4 from "../../assets/logos/alukkas.png";
import img5 from "../../assets/logos/apco.png";
import img6 from "../../assets/logos/asianet.png";
import img7 from "../../assets/logos/aster.svg";
import img8 from "../../assets/logos/baby.png";
import img9 from "../../assets/logos/bhimaj.png";
import img10 from "../../assets/logos/gokulam.png";
import img11 from "../../assets/logos/kmct.png";
import img12 from "../../assets/logos/kottakal.png";
import img13 from "../../assets/logos/ksfe.png";
import img14 from "../../assets/logos/mvr.png";
import img15 from "../../assets/logos/nti.png";
import img16 from "../../assets/logos/paragon.png";
import img17 from "../../assets/logos/popular.png";
import img18 from "../../assets/logos/taj.png";

function Grid() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
  ];

  return (
    <div className="sectionSix-grid">
      <div className="sectionSix-grid-main">
        {images.map((img, index) => (
          <div
            key={index}
            className="sectionSix-grid-item"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={img} alt="" height={100} width={100} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
