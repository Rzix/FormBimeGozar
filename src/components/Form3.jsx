import React, { useState } from "react";
import { FaSpinner, FaUser, FaEnvelope, FaGraduationCap, FaBuilding, FaUsers, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContractRegistrationForm = () => {
    const [formData, setFormData] = useState({
        policyCode: "",
        email: "",
        fieldOfStudy: "",
        insuranceCompany: "",
        individualName: ""
    });
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);



    const individuals = [
        "ممدشون",
        "عمادشون",
        "سجادشون",
        "ساراشون",
        "مریمشون"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);


        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Form submitted:", formData);
            setFormData({
                policyCode: "",
                email: "",
                fieldOfStudy: "",
                insuranceCompany: "",
                individualName: ""
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 ease-in-out hover:shadow-xl animate-fade-in">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">قرار داد</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <FaUser className="w-5 h-5" />
                        </div>
                        <input
                            type="number"
                            name="policyCode"
                            value={formData.policyCode}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                            placeholder="کد بیمه گذار"
                            required
                        />
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <FaEnvelope className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                            placeholder="کد رایانامه"
                            required
                        />
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <FaGraduationCap className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            name="fieldOfStudy"
                            value={formData.fieldOfStudy}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                            placeholder="رشته"
                            required
                        />
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <FaBuilding className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            name="insuranceCompany"
                            value={formData.insuranceCompany}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100"
                            placeholder="نام شرکت بیمه"
                            required
                        />
                    </div>


                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                            <FaUsers className="w-5 h-5" />
                        </div>
                        <select
                            name="individualName"
                            value={formData.individualName}
                            onChange={handleChange}
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-gray-100 appearance-none"
                            required
                        >
                            <option value="">انتخاب اسمشون</option>
                            {individuals.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                    >
                        {isSubmitting ? (
                            <>
                                <FaSpinner className="w-5 h-5 animate-spin" />
                                <span>داره میره...</span>
                            </>
                        ) : (
                            <>
                                <FaPaperPlane className="w-5 h-5" />
                                <span>ثبت اطلاعات شما</span>
                            </>
                        )}
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition-all duration-300 hover:scale-105 mt-4"
                    >
                        بازگشت به صفحه اصلی
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContractRegistrationForm;
