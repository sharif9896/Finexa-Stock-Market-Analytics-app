import React from "react";

const Awards = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Image Section */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Broker"
            className="img-fluid"
          />
        </div>

        {/* Content Section */}
        <div className="col-12 col-md-6 p-3">
          <h2 className="fw-bold mb-3 text-center text-md-start">
            Largest stock broker in India
          </h2>

          <p className="mb-4 text-center text-md-start">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Futures & Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="list-unstyled">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>

          <div className="text-center text-md-start mt-3">
            <img
              src="media/images/pressLogos.png"
              alt="Press"
              className="img-fluid"
              style={{ maxWidth: "95%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
