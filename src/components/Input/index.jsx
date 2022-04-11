import React from "react";

export default function Input({ label, error, required, ...props }) {
  return (
    <>
      <label className="label">
        <p>
          {label}
          {required && <span>*</span>}
        </p>
        <input type="text" {...props} />
      </label>
      {error && <p className="error-text">{error}</p>}
    </>
  );
}

Input.Number = (props) => {
  return <Input {...props} type="number" />;
};
Input.Password = (props) => {
  return <Input {...props} type="password" />;
};
Input.Email = (props) => {
  return <Input {...props} type="email" />;
};
Input.Textarea = ({ label, placeholder, onChange, error }) => {
  return (
    <>
      <label className="label">
        <p>
          {label}
          <span>*</span>
        </p>
        <textarea name="" id="" cols={30} rows={10} defaultValue={""} />
      </label>
      {error && <p className="error-text">{error}</p>}
    </>
  );
};
