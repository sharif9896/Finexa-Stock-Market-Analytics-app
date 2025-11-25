import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5 pt-5">
        {/* Top Section */}
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-3 mb-4">
            <img
              src="media/images/logos_t.png"
              alt="logo"
              className="img-fluid mb-2"
              style={{ maxWidth: "150px" }}
            />
            <p className="text-muted" style={{ fontSize: "13px" }}>
              &copy; 2020 - 2025, Not Finexa Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <p className="fw-bold">Company</p>
            <ul className="list-unstyled small">
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Referral program
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Finexa.tech
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Press & media
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Finexa cares (CSR)
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <p className="fw-bold">Support</p>
            <ul className="list-unstyled small">
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Support Portal
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  List of charges
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Downloads & resources
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <p className="fw-bold">Account</p>
            <ul className="list-unstyled small">
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Open an Account
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  Fund Transfer
                </a>
              </li>
              <li>
                <a className="text-dark text-decoration-none" href="#">
                  60 day Challenge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Legal Section */}
        <div
          className="text-muted small mt-4"
          style={{ fontSize: "11px", lineHeight: "1.6" }}
        >
          <p>
            Finexa Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633. CDSL/NSDL: Depository services through Finexa
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019.
          </p>

          <p>
            For complaints regarding securities broking, write to
            <b> complaints@Finexa.com</b>. Ensure you read the Risk Disclosure
            Document. Investments in securities market are subject to market
            risks; read related documents carefully.
          </p>

          <p>
            KYC is a one-time process while dealing in securities markets. We do
            not provide stock tips or trade on anyone's behalf.
          </p>
        </div>

        {/* Bottom Quick Links */}
        <div className="row text-center mt-4 small">
          {[
            "NSE",
            "BSE",
            "MCX",
            "Terms & conditions",
            "Policies & procedures",
            "Privacy policy",
            "Disclosure",
            "Investor's attention",
            "Investor charter",
          ].map((text, idx) => (
            <div key={idx} className="col-6 col-sm-4 col-md text-muted py-1">
              {text}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
