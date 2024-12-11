import React from "react";

const InputField = ({
  label,
  value,
  onChange,
  name,
  type = "number",
  minLength = 0,
  maxLength = 255,
  placeholder = "",
}) => {
  return (
    <div className="mb-4 ">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  );
};


export default InputField;
