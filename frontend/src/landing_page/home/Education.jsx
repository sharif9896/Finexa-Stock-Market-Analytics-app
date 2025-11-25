import React from "react";

const Education = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "70%" }}
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h2 className="mb-3">Free and open market education</h2>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="text-decoration-none fw-semibold">
            Varsity →
          </a>

          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="#" className="text-decoration-none fw-semibold">
            TradingQ&A →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
