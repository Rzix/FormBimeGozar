import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import validationSchemaForm2 from "./Joi Input Validator/validationSchemaForm2";
import { number, string } from "joi";

const Form2 = () => {
  const [formData, setFormData] = useState({
    policyId: "",
    payerBimegozar: "",
    codeMelli: "",
    bimeGozar: "",
    name: "",
    lastName: "",
    avatar: "../assets/img/company.jpg",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    const finalFormData = {
      ...formData,
      avatar: formData.avatar || null, 
    };
  
    const { error } = validationSchemaForm2.validate(finalFormData, {
      abortEarly: false,
    });
  
    if (error) {
      const validationErrors = error.details.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {});
      setErrors(validationErrors);
      return;
    }
  
    const queryString = new URLSearchParams(finalFormData).toString();
    navigate(`/Form2/result?${queryString}`);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center mb-4">
        <label htmlFor="imgUpload" className="font-medium text-lg">
          لطفا تصویر را آپلود کنید
        </label>
        <div
          className="relative mx-auto w-24 h-24 mt-2 cursor-pointer"
          onClick={() => document.getElementById("fileInput").click()}
        >
          <img
            src={formData.avatar}
            alt="Uploaded Avatar"
            className="rounded-full w-full h-full object-cover border-4 border-blue-500 transform transition-transform duration-300 hover:scale-105"
          />
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
      </div>

      
      <InputField
        label="کد بیمه‌گذار"
        type={number}
        name="policyId"
        value={formData.policyId}
        onChange={handleChange}
        error={errors.policyId}
      />
      <InputField
        label="کد ملی"
        type={number}
        name="codeMelli"
        value={formData.codeMelli}
        onChange={handleChange}
        error={errors.codeMelli}
      />
      <InputField
        label="کد پرداخت بیمه‌گذار"
        type={number}
        name="payerBimegozar"
        value={formData.payerBimegozar}
        onChange={handleChange}
        error={errors.payerBimegozar}
      />
      <InputField
        label="کد رایانامه"
        type={number}
        name="bimeGozar"
        value={formData.bimeGozar}
        onChange={handleChange}
        error={errors.bimeGozar}
      />
      <InputField
        label="نام"
        type={string}
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <InputField
        label="نام خانوادگی"
        type={string}
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
      />

      <button
        type="submit"
        style={{ padding: "10px", marginTop: "10px" }}
      >
        ارسال
      </button>

      <button
        type="button"
        onClick={() => navigate("/")}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition-all duration-300 hover:scale-105 mt-4"
      >
        بازگشت به صفحه اصلی
      </button>
    </form>
  );
};

export default Form2;
