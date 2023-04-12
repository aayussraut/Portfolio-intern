import React from "react";
import Style from "./FormInput.module.css";
const FormInput = ({
  fieldName,
  name,
  type,
  value,
  handleChange,
  isMessage,
}) => {
  return (
    <div className={Style.formInput}>
      <label htmlFor={name}>{fieldName}</label>
      {isMessage ? (
        <textarea
          name={name}
          id={name}
          cols="30"
          rows="10"
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default FormInput;
