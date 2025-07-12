function OurWork() {
  const products = [
    {
      img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/product/30.jpeg",
      name: "Ceiling Speakers",
      span: 10,
    },
    {
      img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/product/22.avif",
      name: "Wireless Microphone System",
      span: 15,
    },
    {
      img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/product/24.png",
      name: "Home Theatre",
      span: 10,
    },
    {
      img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/product/25.jpeg",
      name: "Mixers",
      span: 15,
    },
    {
      img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/product/26.jpg",
      name: "Projectors",
      span: 10,
    },
    {
      img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/product/27.webp",
      name: "Power Amplifiers",
      span: 10,
    },
    {
      img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/product/1.jpg",
      name: "Wall Mount Speakers",
      span: 15,
    },
    {
      img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/product/33.jpeg",
      name: "Subwoofer",
      span: 15,
    },
    {
      img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/product/32.jpeg",
      name: "In-Wall Speakers",
      span: 10,
    },
    {
      img: "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Lalsonselectronics/product/28.avif",
      name: "Speakers",
      span: 10,
    },
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
