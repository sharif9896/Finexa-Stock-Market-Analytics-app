import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="w-100">
      <div className="container">
        <div className="row align-items-center py-5">

          {/* Text Section */}
          <div className="col-12 col-md-6 p-4 text-center text-md-start">
            <h1 className="fs-2 mb-3">{productName}</h1>
            <p className="text-muted">{productDescription}</p>

            <a
              href={learnMore}
              className="d-inline-block mt-3 text-decoration-none fw-semibold"
            >
              Learn More &rarr;
            </a>
          </div>

          {/* Image Section */}
          <div className="col-12 col-md-6 text-center p-4">
            <img
              src={imageURL}
              alt="product-img"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default RightSection;
