import React from "react";

const Universe = () => {
  return (
    <div className="w-100">
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="fs-2 fw-bold">The Finexa Universe</h1>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row text-center mt-4">

          {/* Single item */}
          {[
            {
              img: "media/images/zerodhaFundhouse.png",
              text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
            },
            {
              img: "media/images/sensibullLogo.svg",
              text: "Options trading platform that lets you create strategies, analyze positions, and track key metrics."
            },
            {
              img: "media/images/tijori.svg",
              text: "Personalized advice on life and health insurance. No spam and no mis-selling."
            },
            {
              img: "media/images/streakLogo.png",
              text: "Systematic trading platform that allows you to create and backtest strategies without coding."
            },
            {
              img: "media/images/smallcaseLogo.png",
              text: "Thematic investing platform to invest in diversified baskets of stocks or ETFs."
            },
            {
              img: "media/images/dittoLogo.png",
              text: "Personalized advice on life and health insurance. No spam and no mis-selling."
            }
          ].map((item, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 p-3">
              <img
                src={item.img}
                alt="product"
                className="img-fluid mb-3"
                style={{ maxWidth: "120px" }}
              />
              <p className="text-muted small px-2">{item.text}</p>
            </div>
          ))}

        </div>

        {/* Signup Button */}
        <div className="text-center mt-4 mb-5">
          <button className="btn btn-primary fs-6 px-4 py-2">
            Signup now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Universe;
