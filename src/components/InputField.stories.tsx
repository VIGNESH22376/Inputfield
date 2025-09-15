
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import InputField, { InputFieldProps } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    variant: { control: "radio", options: ["outlined", "filled", "ghost"] },
    theme: { control: "radio", options: ["light", "dark"] },
  },
};
export default meta;

type Story = StoryObj<typeof InputField>;

// Reusable Template
const Template = (args: InputFieldProps) => {
  const [value, setValue] = useState(args.value ?? "");
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

// ----------------- Stories -----------------

// Demo with text + password in one story
export const Default: Story = {
  render: () => {
    const [textValue, setTextValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    return (
      <div style={{ width: "300px" }}>
        <h4>Text Input</h4>
        <InputField
          label="Name"
          placeholder="Enter your name"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          helperText="Type something..."
          clearable
        />
        <p>Value: {textValue}</p>

        <hr style={{ margin: "20px 0" }} />

        <h4>Password Input</h4>
        <InputField
          label="Password"
          placeholder="Enter password"
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          helperText="Your secret password"
          showPasswordToggle
        />
        <p>Password: {passwordValue}</p>
      </div>
    );
  },
};

// Sizes
export const Small = { args: { label: "Small Input", size: "sm" }, render: Template };
export const Medium = { args: { label: "Medium Input", size: "md" }, render: Template };
export const Large = { args: { label: "Large Input", size: "lg" }, render: Template };

// Variants
export const Filled = { args: { label: "Filled Input", variant: "filled" }, render: Template };
export const Outlined = { args: { label: "Outlined Input", variant: "outlined" }, render: Template };
export const Ghost = { args: { label: "Ghost Input", variant: "ghost" }, render: Template };

// States
export const Disabled = { args: { label: "Disabled Input", disabled: true }, render: Template };
export const Error = {
  args: { label: "Name", invalid: true, errorMessage: "This field is required" },
  render: Template,
};
export const Loading = { args: { label: "Loading...", loading: true, value: "Loading..." }, render: Template };

// Optional features
export const Clearable = { args: { label: "Clearable Input", clearable: true }, render: Template };
export const PasswordToggle = {
  args: { label: "Password", type: "password", showPasswordToggle: true },
  render: Template,
};
export const DarkTheme = {
  args: { label: "Dark Theme Input", theme: "dark", helperText: "Dark mode input" },
  render: Template,
};
