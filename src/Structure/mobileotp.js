
import React, { useState } from "react";


function Otp() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState("");

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleSendOtpClick = async () => {
   
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobileNumber)) {
      setOtpError("Please enter a valid 10 digit Indian mobile number.");
      return;
    }

    
    const body = { mobile: mobileNumber };
    const response = await fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    if (response.ok) {
      setOtpSent(true);
      setOtpError("");
      setMobileNumber("");
    } else {
      
      const errorResponse = await response.json();
      setOtpSent(false);
      setOtpError(errorResponse.error);
    }
  };

  return (
    <div>
      <h1>Enter Your Mobile Number</h1>
      <input
        type="number"
        placeholder="mobile"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
      />

      <button onClick={handleSendOtpClick}>GET OTP</button>

      {otpSent && <p>OTP sent successfully!</p>}
      {otpError && <p>{otpError}</p>}
    </div>
  );
};

export default Otp;
