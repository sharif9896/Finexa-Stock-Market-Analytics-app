import React from "react";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-4 text-center text-md-start">

        {/* Left Content */}
        <div className="col-12 col-md-8 p-3">
          <a href="#" className="text-decoration-none">
            <h3 className="fw-semibold fs-5 fs-md-4 text-center text-md-start">
              Brokerage calculator
            </h3>
          </a>

          <ul className="text-muted mt-3" style={{ lineHeight: "1.8", fontSize: "14px" }}>
            <li>Call & Trade and RMS auto-squareoff: Additional ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via email.</li>
            <li>Physical contract note copy: ₹20 per contract note.</li>
            <li>For NRI (non-PIS): 0.5% or ₹100 per executed order (lower applies).</li>
            <li>Equity Delivery: ₹0</li>
            <li>Intraday & F&O: ₹20 per trade</li>
            <li>Mutual Funds: ₹0</li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="col-12 col-md-4 p-3 text-center text-md-start d-flex align-items-center justify-content-center">
          <a href="#" className="fw-semibold text-decoration-none fs-6">
            List of Charges
          </a>
        </div>

      </div>
    </div>
  );
};

export default Brokerage;
