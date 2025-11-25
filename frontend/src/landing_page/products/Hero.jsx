import React from "react";

const Hero = () => {
  return (
    <div className="w-100">
      <div className="container mb-4 border-bottom">
        <div className="text-center py-5 px-3">
          <h1 className="fw-bold" style={{ fontSize: "2.2rem" }}>
            Technology
          </h1>

          <h3
            className="text-muted mt-3"
            style={{ fontSize: "1.1rem", lineHeight: "1.6" }}
          >
            Sleek, modern and intuitive trading platforms
          </h3>

          <p className="mt-4 mb-4" style={{ fontSize: "1rem" }}>
            Check out our{" "}
            <a href="#" className="text-decoration-none">
              investment offerings &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
