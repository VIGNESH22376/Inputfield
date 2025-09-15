

import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  clearable?: boolean;
  type?: "text" | "password";
  showPasswordToggle?: boolean;
  theme?: "light" | "dark";
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  variant = "outlined",
  size = "md",
  clearable = false,
  type = "text",
  showPasswordToggle = false,
  theme = "light",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Variant styles
  const variantClass =
    variant === "filled"
      ? "form-control bg-light"
      : variant === "ghost"
      ? "form-control border-0 shadow-none"
      : "form-control";

  // Size styles
  const sizeClass =
    size === "sm"
      ? "form-control-sm"
      : size === "lg"
      ? "form-control-lg"
      : "";

  // Theme styles
  const themeClass = theme === "dark" ? "bg-dark text-white" : "";

  return (
    <div className="mb-3">
      {label && <label className="form-label">{label}</label>}
      <div className="input-group">
        <input
          type={type === "password" && showPassword ? "text" : type}
          className={`${variantClass} ${sizeClass} ${themeClass} ${
            invalid ? "is-invalid" : ""
          }`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled || loading}
        />

        {/* Clear button */}
        {clearable && value && !disabled && !loading && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => onChange?.({ target: { value: "" } } as any)}
          >
            ✕
          </button>
        )}

        {/* Password toggle */}
        {type === "password" && showPasswordToggle && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}

        {/* Loading spinner */}
        {loading && (
          <span className="input-group-text">
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
          </span>
        )}
      </div>

      {/* Helper/Error text */}
      {helperText && !invalid && !errorMessage && (
        <div className="form-text">{helperText}</div>
      )}
      {invalid && errorMessage && (
        <div className="invalid-feedback">{errorMessage}</div>
      )}
    </div>
  );
};

export default InputField;
