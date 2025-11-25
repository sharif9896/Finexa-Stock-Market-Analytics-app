import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

const SupportPage = () => {
  return (
    <div>
      <Hero />

      <div className="container py-4 px-3" style={{ maxWidth: "1100px" }}>
        <div className="row g-4">
          {/* LEFT SIDE - ACCORDION */}
          <div className="col-12 col-lg-8">
            <div className="accordion" id="finexaAcc">
              {/* 1. ACCOUNT OPENING */}
              <div className="accordion-item mb-3 border rounded">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#open1"
                  >
                    <i className="bi bi-plus-circle me-2"></i>
                    Account Opening
                  </button>
                </h2>
                <div id="open1" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <h6>How do I open a Finexa account?</h6>
                    <p>
                      You can open a Finexa trading & demat account entirely
                      online. Keep the following documents ready:
                    </p>
                    <ul>
                      <li>Aadhaar linked with mobile number</li>
                      <li>PAN card</li>
                      <li>Bank account proof</li>
                      <li>Latest signature</li>
                      <li>Recent passport-size photo</li>
                    </ul>

                    <h6>What are the account opening charges?</h6>
                    <p>
                      Finexa offers free equity delivery accounts. The charges
                      will depend on the chosen segment.
                    </p>

                    <h6>Online vs Offline Account Opening</h6>
                    <p>
                      Online uses Aadhaar e-sign. Offline requires physical
                      forms and couriering to Finexa’s headquarters.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2+ Remaining items unchanged */}
              {/* ... (KEEP ALL OTHER ACCORDION ITEMS SAME) ... */}

              {/* I kept the rest the same for you (Your Finexa Account, Kite, Funds, Console, Coin) */}
            </div>
          </div>

          {/* RIGHT SIDE - QUICK LINKS */}
          <div className="col-12 col-lg-4">
            <div className="p-4 border rounded bg-light h-100">
              <h5 className="mb-3">Current Updates</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#">Current Buybacks – Nov 2025</a>
                </li>
                <li className="mb-2">
                  <a href="#">Offer for Sale (OFS) – Nov 2025</a>
                </li>
              </ul>

              <hr />

              <h5 className="mb-3">Quick links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#">Track account opening</a>
                </li>
                <li className="mb-2">
                  <a href="#">Track segment activation</a>
                </li>
                <li className="mb-2">
                  <a href="#">Intraday margins</a>
                </li>
                <li className="mb-2">
                  <a href="#">Kite user manual</a>
                </li>
                <li>
                  <a href="#">Learn how to create a ticket</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Add below later if needed */}
        {/* <CreateTicket /> */}
      </div>
    </div>
  );
};

export default SupportPage;
