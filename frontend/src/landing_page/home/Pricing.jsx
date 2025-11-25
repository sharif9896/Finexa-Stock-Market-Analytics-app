import React from "react";

const Pricing = () => {
  return (
    <div className="container mb-5">
      <div className="row align-items-center gy-4">

        {/* Text Section */}
        <div className="col-12 col-md-5">
          <h1 className="mb-3 fs-2 fw-bold">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See Pricing →
          </a>
        </div>

        {/* Space for large screens */}
        <div className="d-none d-md-block col-md-1"></div>

        {/* Pricing Boxes Section */}
        <div className="col-12 col-md-6">
          <div className="row text-center gy-3">

            {/* Box 1 */}
            <div className="col-12 col-sm-6 p-3 border rounded">
              <h1 className="mb-2 fw-bold">₹0</h1>
              <p className="text-muted fs-6 mb-0">
                Free equity delivery & <br />
                direct mutual funds
              </p>
            </div>

            {/* Box 2 */}
            <div className="col-12 col-sm-6 p-3 border rounded">
              <h1 className="mb-2 fw-bold">₹20</h1>
              <p className="text-muted fs-6 mb-0">
                Intraday and F&O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
