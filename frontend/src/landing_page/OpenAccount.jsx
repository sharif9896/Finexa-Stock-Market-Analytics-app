import React from "react";

const OpenAccount = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row text-center justify-content-center">
          {/* Hero Title */}
          <div className="col-12">
            <h1 className="fw-bold mt-3 mb-3" style={{ fontSize: "2rem" }}>
              Open a Finexa account
            </h1>
          </div>

          {/* Sub Text */}
          <div className="col-12 col-md-8">
            <p className="text-muted" style={{ fontSize: "1rem" }}>
              Modern platform and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>
          </div>

          {/* CTA Button */}
          <div className="col-12">
            <button
              className="btn btn-primary fs-5 mt-2 py-2 px-4"
              style={{ width: "200px", maxWidth: "100%" }}
            >
              Signup now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenAccount;
