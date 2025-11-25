import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row mt-5 border-bottom p-3 p-md-5 text-center">
        <h1 className="fw-bold">Pricing</h1>
        <h3 className="text-muted mt-3 fs-6 fs-md-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>

        <div className="row mt-5 g-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-3">
              <img src="media/images/pricingEquity.svg" className="img-fluid mb-3" alt="" />
              <h4 className="fw-semibold">Free equity delivery</h4>
              <p className="text-muted">
                All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-3">
              <img src="media/images/intradayTrades.svg" className="img-fluid mb-3" alt="" />
              <h4 className="fw-semibold">Intraday & F&O trades</h4>
              <p className="text-muted">
                Flat ₹20 or 0.03% (lower) per executed order on intraday equity, currency, & commodities.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4 mx-md-auto">
            <div className="p-3">
              <img src="media/images/pricingEquity.svg" className="img-fluid mb-3" alt="" />
              <h4 className="fw-semibold">Free direct MF</h4>
              <p className="text-muted">
                All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
