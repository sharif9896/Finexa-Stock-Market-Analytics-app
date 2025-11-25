import React from "react";

const CreateTicket = () => {
  return (
    <div className="w-100">
      <div className="container">
        <div className="row p-3 p-md-5 mt-4 mb-4">
          <h1 className="fs-4 fs-md-2 text-center text-md-start">
            To create a ticket, select a relevant topic
          </h1>

          <div className="col-12 col-md-4 p-4 mt-4 mb-4 text-center text-md-start border rounded shadow-sm">
            <h5 className="mb-0">Account Opening</h5>
          </div>

          {/* You can duplicate similar blocks here for more topics */}
          {/* Example:
          <div className="col-12 col-md-4 p-4 mt-3 mb-3 text-center text-md-start border rounded shadow-sm">
            <h5>KYC</h5>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
