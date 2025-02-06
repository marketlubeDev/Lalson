import ScrollCardBox from "../../Components/ScrollCardBox";

const obj = [
  {
    // img: step1,
    color: "#ffffff",
    desc: "Receive personalized guidance to explore course that match your goals.",
    title: "Expert Counselling Session",
    span: "1",
    type: "green",
  },
  {
    // img: step2,
    color: " #a6a6a6",
    desc: "Research and select institutions based on academics and future career prospects.",
    title: "Shortlist Universities & Programs",
    span: "2",
    type: "blue",
  },
  {
    // img: step3,
    color: "#ffffff",
    desc: "Take required exams like IELTS, TOEFL, GRE, or GMAT with thorough preparation.",
    title: "Prepare for Entrance Tests",
    span: "3",
    type: "gray",
  },
  {
    // img: step4,
    color: " #a6a6a6",
    desc: "Complete applications with necessary documents like SOPs, LORs, and transcripts.",
    title: "Submit Applications Early",
    span: "4",
    type: "blue",
  },
  {
    // img: step5,
    color: "#ffffff",
    desc: "Review acceptance letters, finalize your choice, and pay the enrollment deposit.",
    title: "Secure Admission Offer",
    span: "5",
    type: "green",
  },
  {
    // img: step6,
    color: " #a6a6a6",
    desc: "Submit visa applications with required documents and attend interviews if necessary",
    title: "Get Visa, Fly Abroad.",
    span: "6",
    type: "blue",
  },
];

function Scrollcard() {
  return (
    <section className="scroll-card">
      <div className="scroll-card-scroll-container">
        {obj.map((item, index) => (
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
