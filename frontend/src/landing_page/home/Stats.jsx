import React from "react";

const Stats = () => {
  return (
    <div className="container p-3">
      <div className="row p-3 align-items-center gy-4">
        {/* Left Text Section */}
        <div className="col-12 col-md-6 p-3">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-5 fw-semibold">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Finexa with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-5 fw-semibold">No Spam Gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, “gamification”, or annoying push notifications.
            High-quality apps that let you trade the way you like.
          </p>

          <h2 className="fs-5 fw-semibold">Finexa Universe</h2>
          <p className="text-muted">
            Not just an app — a whole ecosystem. Our investments in 30+ fintech
            startups provide tailored financial services.
          </p>

          <h2 className="fs-5 fw-semibold">Do better with money</h2>
          <p className="text-muted">
            With features like Nudge and Kill Switch, we help you make better
            financial decisions.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid mb-3"
          />

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a href="#" style={{ textDecoration: "none" }}>
              Explore our products →
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
