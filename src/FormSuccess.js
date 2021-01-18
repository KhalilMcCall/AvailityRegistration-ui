import React, { useState } from "react";
import "./Css/Form.css";

function FormSuccess() {
  return (
    <div className="formSuccess">
      <div className="fsContainer">
        <div className="successPicture">
          <i class="fas fa-check-circle fa-5x"></i>
          <div className="successMessage">
            <p>Request Submitted Successfully.</p>
            <p>Please Allow 3 - 5 Business days for Verification.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSuccess;
