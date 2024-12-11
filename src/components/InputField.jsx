import React from "react";

const InputField = ({
  label,
  value,
  onChange,
  name,
  type = "number",
  minLength = null,
  maxLength = null,
}) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        minLength={minLength}
        maxLength={maxLength}
        style={{
          marginLeft: "10px",
          padding: "5px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default InputField;
