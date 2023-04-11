import React from "react";

interface InputProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  error: boolean;
  errorMessage: string | undefined;
}

const Input = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  errorMessage = "",
  ...props
}: InputProps) => {
  return (
    <div className="w-full mb-3">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        autoComplete="off"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full placeholder-gray-500 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-gray-600 "
        {...props}
      />
      {error ? (
        <p className="text-red-500 italic text-sm">*{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default Input;
