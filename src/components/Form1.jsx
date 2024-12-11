import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InsuranceForm = () => {
  const [state, setState] = useState({
    formData: "",
    isSubmitted: false,
    isLoading: false,
    avatar: "../assets/img/company.jpg",
  });

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setState((prev) => ({ ...prev, isSubmitted: true }));
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setState((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl">
        <div className="text-center">
          <label htmlFor="imgCompany" className="font-medium text-lg ">
            لطفا تصویر رو آپلود کنید
          </label>
          <div
            className="relative mx-auto w-24 h-24 mb-4 cursor-pointer pt-1"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <img
              src={state.avatar}
              alt="Insurance Company Avatar"
              className="rounded-full w-full h-full object-cover border-4 border-blue-500 transform transition-transform duration-300 hover:scale-105 "
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
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 animate-fade-in ">
            فرم ثبت شرکت بیمه
          </h2>
          <p className="mt-2 text-sm text-gray-600 animate-fade-in font-medium">
            لطفا تصویر و نام شرکت خود را وارد کنید
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 animate-slide-up">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="companyName" className="sr-only">
                نام شرکت را وارد کنید
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full text-right px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-300"
                placeholder="لطفا نام شرکت خود را وارد کنید"
                value={state.formData}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, formData: e.target.value }))
                }
                disabled={state.isSubmitted}
              />
            </div>
          </div>

          <div>
            {!state.isSubmitted ? (
              <button
                type="submit"
                disabled={state.isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    در حال بارگزاری اطلاعات
                  </span>
                ) : (
                  "ثبت اطلاعات"
                )}
              </button>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-100 p-2 rounded-md animate-fade-in">
                <FaCheck className="w-5 h-5" />
                <span>با موفقیت ثبت شدی 🤑</span>
              </div>
            )}
          </div>
        </form>

        <button
          onClick={() => navigate("/")}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition-all duration-300 hover:scale-105 mt-4"
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
};

export default InsuranceForm;
