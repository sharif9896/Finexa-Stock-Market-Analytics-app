import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-4 mt-5 border-top">
        <h1 className="text-center mt-4 mb-4">People</h1>
      </div>

      {/* Responsive Section */}
      <div
        className="row border-top p-4 text-muted d-flex align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        {/* Image Column */}
        <div className="col-12 col-md-5 text-center mb-4">
          <img
            src="media/images/uii.png"
            className="rounded-circle img-fluid"
            style={{ maxWidth: "200px" }}
            alt="Profile"
          />
          <h4 className="mt-3">Sharif Rayan</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* Content Column */}
        <div className="col-12 col-md-7">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" className="text-decoration-none">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
