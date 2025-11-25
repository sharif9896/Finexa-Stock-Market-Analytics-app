import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="w-100">
      <div className="container py-4">
        <div className="row align-items-center">

          {/* Image Section - Full width on mobile */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <img
              src={imageURL}
              alt="Product"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>

          {/* Text Section */}
          <div className="col-12 col-md-6 px-3">
            <h1 className="fw-bold" style={{ fontSize: "1.8rem" }}>
              {productName}
            </h1>

            <p className="text-muted mt-2 mb-4">{productDescription}</p>

            {/* Links */}
            <div className="mb-3">
              <a href={tryDemo} className="text-decoration-none me-4">
                Try Demo &rarr;
              </a>

              <a href={learnMore} className="text-decoration-none">
                Learn More &rarr;
              </a>
            </div>

            {/* App Badges */}
            <div className="d-flex flex-wrap justify-content-start gap-3 mt-3">
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  className="img-fluid"
                  style={{ maxHeight: "45px" }}
                />
              </a>

              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="App Store"
                  className="img-fluid"
                  style={{ maxHeight: "45px" }}
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
