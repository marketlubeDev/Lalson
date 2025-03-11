import img1 from "../../assets/logos/AdityaBirla.svg";
import img2 from "../../assets/logos/AirIndia.svg";
import img3 from "../../assets/logos/AlhindS.svg";
import img4 from "../../assets/logos/alukkas.png";
import img5 from "../../assets/logos/apc.png";
import img6 from "../../assets/logos/asianet.png";
import img7 from "../../assets/logos/aster.svg";
import img8 from "../../assets/logos/Bmh.svg";
import img9 from "../../assets/logos/BhimaS.svg";
import img10 from "../../assets/logos/gokulam.png";
import img11 from "../../assets/logos/kmcte.svg";
import img12 from "../../assets/logos/kottakall.png";
import img13 from "../../assets/logos/ksfee.png";
import img14 from "../../assets/logos/mvrr.svg";
import img15 from "../../assets/logos/nits.svg";
import img16 from "../../assets/logos/parag.png";
import img17 from "../../assets/logos/pplr.png";
import img18 from "../../assets/logos/Taj.svg";
import { PiArrowCircleDownThin } from "react-icons/pi";

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
    <div className="sectionSix-grid" id="clients">
      <div className="sectionSix-grid-brand">
        Our Brands{" "}
        <a href="#clients">
          <PiArrowCircleDownThin className="downarrow" />
        </a>
      </div>
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
            <img src={img} alt="" height={108} width={108} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
