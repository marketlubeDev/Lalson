import Count from "./Count";

function ImageSection() {
  return (
    <div className="imageSection">
      <div></div>
      <div className="imageSection-container">
        <div className="imageSection-container-left">
          <div className="imageSection-container-left-we">
            we love & live craftsmanship
          </div>
          <div className="imageSection-container-left-brand">our brands</div>
        </div>
        <Count />
      </div>
    </div>
  );
}

export default ImageSection;
