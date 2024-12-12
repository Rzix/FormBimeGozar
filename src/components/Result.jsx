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
    bimeGozar: queryParams.get("bimeGozar"),
    name: queryParams.get("name"),
    lastName: queryParams.get("lastName"),
    imagePerson: queryParams.get("avatar")
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-lg font-bold mb-4 text-center">نتیجه ارسال فرم</h2>
      <div className="w-full flex items-center justify-center">
        <img
          src={formData.imagePerson}
          alt=""
          className="rounded-full object-cover border-4 border-blue-500  transform transition-transform duration-100 w-[50%]"
        />
      </div>
      <ul className="list-none mb-4">
        <li className="flex justify-between mb-2">
          <span className="text-gray-600">کد بیمه‌گذار:</span>
          <span className="text-gray-900">{formData.policyId}</span>
        </li>
        <li className="flex justify-between mb-2">
          <span className="text-gray-600">کد ملی:</span>
          <span className="text-gray-900">{formData.codeMelli}</span>
        </li>
        <li className="flex justify-between mb-2">
          <span className="text-gray-600">کد پرداخت بیمه‌گذار:</span>
          <span className="text-gray-900">{formData.payerBimegozar}</span>
        </li>
        <li className="flex justify-between mb-2">
          <span className="text-gray-600">کد بیمه‌گذار:</span>
          <span className="text-gray-900">{formData.bimeGozar}</span>
        </li>
        <li className="flex justify-between mb-2">
          <span className="text-gray-600">نام:</span>
          <span className="text-gray-900">{formData.name}</span>
        </li>
        <li className="flex justify-between mb-2">
          <span className="text-gray-600">نام خانوادگی:</span>
          <span className="text-gray-900">{formData.lastName}</span>
        </li>
      </ul>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        بازگشت به فرم
      </button>
    </div>
  );
};

export default Result;
