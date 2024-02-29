import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  id: string;
  name: string;
};
const Input = ({ label, id, name, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type="text" {...props} />
    </div>
  );
};

export default Input;
