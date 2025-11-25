import React from "react";

const Hero = () => {
  return (
    <div className="container p-4 p-md-5 mb-5">
      <div className="row text-center justify-content-center">
        {/* Hero Image */}
        <div className="col-12 mb-4">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="img-fluid"
            style={{ maxWidth: "90%", height: "auto" }}
          />
        </div>

        {/* Heading */}
        <h1 className="mt-3 fw-bold">Invest in everything</h1>

        {/* Description */}
        <p className="mt-2 mb-4 fs-6 text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        {/* Button */}
        <div className="col-12 col-md-4">
          <button className="btn btn-primary w-100 p-3 fs-6">Signup now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
