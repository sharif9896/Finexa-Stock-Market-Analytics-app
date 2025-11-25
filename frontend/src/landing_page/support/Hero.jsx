import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="py-5 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #4a90e2, #23395b)",
        }}
      >
        <div className="container px-3" style={{ maxWidth: "900px" }}>
          {/* Responsive heading */}
          <h1 className="fw-bold mb-3 display-5">
            Finexa Support Portal
          </h1>

          {/* Responsive paragraph text */}
          <p className="text-white-50 mb-4 fs-6 fs-md-5">
            Find answers, explore guides, and get help with your Finexa trading
            & investment account.
          </p>

          {/* Search Bar + Button */}
          <div className="d-flex justify-content-center">
            <div className="input-group flex-column flex-sm-row" style={{ maxWidth: "550px" }}>
              <span className="input-group-text bg-white w-100 w-sm-auto mb-2 mb-sm-0">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="text"
                className="form-control mb-2 mb-sm-0"
                placeholder="Search topics like account opening, funds…"
              />

              <button className="btn btn-primary w-100 w-sm-auto">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
