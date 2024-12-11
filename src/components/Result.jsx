import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation(); 
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const formData = {
    policyId: queryParams.get("policyId"),
    payerBimegozar: queryParams.get("payerBimegozar"),
    codeMelli: queryParams.get("codeMelli"),
    email: queryParams.get("email"),
    phone: queryParams.get("phone"),
  };

  return (
    <div>
      <h2>نتیجه ارسال فرم</h2>
      <p>کد بیمه‌گذار: {formData.policyId}</p>
      <p>کد ملی: {formData.codeMelli}</p>
      <p>کد رایانامه: {formData.email}</p>
      <p>شماره تلفن: {formData.phone}</p>
      <p>کد پرداخت بیمه‌گذار: {formData.payerBimegozar}</p>
      <button onClick={() => navigate("/")}>بازگشت به فرم</button>
    </div>
  );
};

export default Result;
