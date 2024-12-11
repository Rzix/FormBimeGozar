import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

const Form = () => {
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

    navigate(`/result?${queryString}`);
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
    </form>
  );
};

export default Form;
