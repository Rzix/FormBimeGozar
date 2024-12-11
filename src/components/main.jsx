import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const forms = [
  { id: "Form1", title: "فرم ثبت شرکت بیمه", path: "/Form1" },
  { id: "Form2", title: "فرم تعریف شخص بیمه گذار", path: "/Form2" },
  { id: "Form3", title: "فرم ثبت قرارداد", path: "/Form3" },
];

const InsuranceForm = () => {
  const navigate = useNavigate();
  const [selectedForm, setSelectedForm] = useState(null);

  
  const handleFormClick = (formPath) => {
    navigate(formPath);
  };

  
  return (
    <div className=" bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 ">
      {!selectedForm ? (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-blue-600 py-6 px-8">
            <h2 className="text-2xl font-bold text-white text-center">
              انتخاب نوع فرم
            </h2>
          </div>
          <div className="p-8 space-y-4">
            {forms.map((form) => (
              <button
                key={form.id}
                onClick={() => handleFormClick(form.path)}
                className="w-full flex items-center justify-between px-6 py-4 bg-white border-2 border-blue-100 rounded-lg hover:border-blue-500 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-700">{form.title}</span>
                <FaArrowRight className="text-blue-500" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        renderForm()
      )}
    </div>
  );
};

export default InsuranceForm;
