import ScrollCardBox from "../../Components/ScrollCardBox";

const obj = [
  {
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/service/service2.jpg",
    color: "#ffffff",
    desc: "Enhancing the acoustic characteristics of your space with expert acoustic solutions for quality sound reproduction and intelligibility",
    title: "Acoustic Consultation and Designing.",
    span: "1",
    type: "green",
  },
  {
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/service/service1.jpg",
    color: " #a6a6a6",
    desc: "Providing end-to-end project design solutions for an optimal Audio Visual experience.",
    title: "Complete Project Designing.",
    span: "2",
    type: "blue",
  },
  {
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/service/service3.jpg",
    color: "#ffffff",
    desc: "You can count on us to install your precious equipment's, so that they perform precisely as it is meant to be.",
    title: "Installation of Equipment.",
    span: "3",
    type: "gray",
  },
  {
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/service/service4.jpg",
    color: " #a6a6a6",
    desc: "We will take care of all the products sold by us with our in house service department. AMC packages are also available ensuring you with peace of mind.",
    title: "Annual Maintenance & After care.",
    span: "4",
    type: "blue",
  },
  {
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/service/service4.jpg",
    color: "#ffffff",
    desc: "Review acceptance letters, finalize your choice, and pay the enrollment deposit.",
    title: "Secure Admission Offer.",
    span: "5",
    type: "green",
  },
  {
    img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/service/service4.jpg",
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
