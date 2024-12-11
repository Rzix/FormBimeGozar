import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

const Form2 = () => {
  const [formData, setFormData] = useState({
    policyId: "",
    payerBimegozar: "",
    codeMelli: "",
    bimeGozar: "",
    name: "",
    lastName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryString = new URLSearchParams(formData).toString();

    navigate(`/Form2/result?${queryString}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="کد بیمه‌گذار"
        name="policyId"
        value={formData.policyId}
        onChange={handleChange}
        minLength={3}
        maxLength={15}
      />
      <InputField
        label="کد ملی"
        name="codeMelli"
        value={formData.codeMelli}
        onChange={handleChange}
        minLength={3}
        maxLength={15}
      />
      <InputField
        label="کد پرداخت بیمه‌گذار"
        name="payerBimegozar"
        value={formData.payerBimegozar}
        onChange={handleChange}
        minLength={3}
        maxLength={15}
      />
      <InputField
        label="کد بیمه‌گذار"
        name="bimeGozar"
        value={formData.bimeGozar}
        onChange={handleChange}
        minLength={3}
        maxLength={15}
      />
      <InputField
        label="نام"
        name="name"
        value={formData.name}
        onChange={handleChange}
        type="text"
      />
      <InputField
        label="نام خانوادگی"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        type="text"
      />
      <button type="submit" style={{ padding: "10px", marginTop: "10px" }}>
        ارسال
      </button>
      <button
          onClick={() => navigate("/")}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition-all duration-300 hover:scale-105 mt-4"
        >
          بازگشت به صفحه اصلی
        </button>
    </form>
  );
};

export default Form2;
