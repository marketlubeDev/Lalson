import ScrollCardBox from "../../Components/ScrollCardBox";

import IMG2 from "../../assets/service1.jpg";
import IMG3 from "../../assets/service2.jpg";
import IMG4 from "../../assets/service3.jpg";
import IMG1 from "../../assets/service4.jpg";

const obj = [
  {
    img: IMG3,
    color: "#ffffff",
    desc: "Enhancing sound quality with expert acoustic solutions for optimal performance",
    title: "Acoustic Consultation",
    span: "1",
    type: "green",
  },
  {
    img: IMG2,
    color: " #a6a6a6",
    desc: "Providing end-to-end project design solutions for optimal sound and visuals.",
    title: "Complete Project Designing",
    span: "2",
    type: "blue",
  },
  {
    img: IMG4,
    color: "#ffffff",
    desc: "Expert installation of high-quality equipment for superior sound and visuals.",
    title: "Installation of Equipments",
    span: "3",
    type: "gray",
  },
  {
    img: IMG1,
    color: " #a6a6a6",
    desc: "Ensuring long-term performance with reliable annual maintenance and aftercare services.",
    title: "Annual Maintenance & After care",
    span: "4",
    type: "blue",
  },
  {
    img: IMG1,
    color: "#ffffff",
    desc: "Review acceptance letters, finalize your choice, and pay the enrollment deposit.",
    title: "Secure Admission Offer",
    span: "5",
    type: "green",
  },
  {
    img: IMG1,
    color: " #a6a6a6",
    desc: "Submit visa applications with required documents and attend interviews if necessary",
    title: "Get Visa, Fly Abroad.",
    span: "6",
    type: "blue",
  },
];

// Remove last 2 items using slice
const trimmedData = obj.slice(0, -2);

function Scrollcard() {
  return (
    <section className="scroll-card">
      <div className="scroll-card-scroll-container">
        {trimmedData.map((item, index) => (
          <ScrollCardBox
            key={index}
            color={item.color}
            data={item}
          ></ScrollCardBox>
        ))}
      </div>
    </section>
  );
}

export default Scrollcard;
