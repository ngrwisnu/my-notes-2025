import { CustomInputProps } from "./types";

const FormInput: CustomInputProps = ({ className, ...props }) => {
  return (
    <input
      className={`rounded-lg bg-white p-2 text-lg ${className}`}
      {...props}
    />
  );
};

export default FormInput;
