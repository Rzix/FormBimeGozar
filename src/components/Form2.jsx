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
    avatar: "../assets/img/company.jpg",
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
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43";
            }}
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

      <button
        type="submit"
        style={{ padding: "10px", marginTop: "10px" }}
      >
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
