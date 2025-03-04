import IMG1 from "../../assets/service/IMg.jpg";
import IMG2 from "../../assets/service/IMg-1.jpg";
import IMG3 from "../../assets/service/IMg-2.jpg";
import IMG4 from "../../assets/service/IMg-3.jpg";
import IMG5 from "../../assets/service/IMg-4.jpg";
import IMG6 from "../../assets/service/IMg-5.jpg";
import IMG7 from "../../assets/service/IMg-6.jpg";
import IMG8 from "../../assets/service/IMg-7.jpg";
import IMG9 from "../../assets/service/IMg-8.jpg";
import IMG10 from "../../assets/service/IMg-9.jpg";
function OurWork() {
  return (
    <section className="ourWorks" id="projects">
      <div className="ourWorks-container">
        <h1 className="ourWorks-container-title">Our Works</h1>
        <div className="grid-section" id="">
          <div
            className="card"
            style={{
              gridRow: "span 10",
            }}
          >
            <img
              src={IMG1}
              alt="Project 1"
              className="card-image"
              loading="lazy"
            />
          </div>

          <div
            className="card"
            style={{
              gridRow: "span 15",
            }}
          >
            <img
              src={IMG2}
              alt="Project 2"
              className="card-image"
              loading="lazy"
            />
          </div>
          <div
            className="card"
            style={{
              gridRow: "span 10",
            }}
          >
            <img
              src={IMG3}
              alt="Project 1"
              className="card-image"
              loading="lazy"
            />
          </div>

          <div
            className="card"
            style={{
              gridRow: "span 15",
            }}
          >
            <img
              src={IMG4}
              alt="Project 1"
              className="card-image"
              loading="lazy"
            />
          </div>
          <div
            className="card"
            style={{
              gridRow: "span 10",
            }}
          >
            <img
              src={IMG5}
              alt="Project 1"
              className="card-image"
              loading="lazy"
            />
          </div>

          <div
            className="card"
            style={{
              gridRow: "span 10",
            }}
          >
            <img
              src={IMG6}
              alt="Project 1"
              className="card-image"
              loading="lazy"
            />
          </div>
          <div
            className="card"
            style={{
              gridRow: "span 15",
            }}
          >
            <img
              src={IMG7}
              alt="Project 1"
              className="card-image"
              loading="lazy"
            />
          </div>
          <div
            className="card"
            style={{
              gridRow: "span 15",
            }}
          >
            <img
              src={IMG8}
              alt="Project 1"
              className="card-image"
              loading="lazy"
            />
          </div>
          <div
            className="card"
            style={{
              gridRow: "span 10",
            }}
          >
            <img
              src={IMG9}
              alt="Project 1"
              className="card-image"
              loading="lazy"
            />
          </div>

          <div
            className="card"
            style={{
              gridRow: "span 10",
            }}
          >
            <img
              src={IMG10}
              alt="Project 1"
              className="card-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWork;
