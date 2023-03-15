import "./Brands.css";

const Brands = () => {
  return (
    <div className="scroll-wrapper">
      <div className="container-img">
        {[
          1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2,
          3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4,
          5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6,
          7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7,
        ].map((i, ind) => (
          <img
            key={ind}
            src={`/img/brands/image${i}.svg`}
            alt="Brand Logo"
            className={`brand-image${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
