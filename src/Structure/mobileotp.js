import React, { useState } from "react";
import axios from "axios";

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
    try {
      const response = await axios.post(
        "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
        body,

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setOtpSent(true);
        setOtpError("");
        setMobileNumber("");
      } else {
        setOtpSent(false);
        setOtpError("Failed to send OTP. Please try again later.");
      }
    } catch (error) {
      setOtpSent(false);
      setOtpError(
        error.response?.data?.error || "Failed to send OTP. Please try again later."
      );
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
