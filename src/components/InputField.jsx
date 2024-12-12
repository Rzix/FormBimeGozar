import React from "react";

const InputField = ({
  label,
  value,
  onChange,
  name,
  type,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}:
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`block w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none ${
          error
            ? "focus:ring-red-500 focus:border-red-500"
            : "focus:ring-blue-500 focus:border-blue-500"
        } sm:text-sm`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
