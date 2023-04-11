import React from "react";

interface TextAreaProps {
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

const TextArea = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  errorMessage = "",
  ...props
}: TextAreaProps) => {
  return (
    <div className="w-full mb-3">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <textarea
        autoComplete="off"
        id={id}
        name={name}
        rows={5}
        style={{ resize: "none" }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full placeholder-gray-500 border-gray-500 border-opacity-50 rounded-md focus:ring-2 focus:ring-gray-600 "
        {...props}
      ></textarea>
      {error ? (
        <p className="text-red-500 italic text-sm">*{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default TextArea;
