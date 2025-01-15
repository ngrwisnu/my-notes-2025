import { CustomInputProps } from "./types";

const FormInput: CustomInputProps = ({ className, ...props }) => {
  return <input className={`rounded-lg p-2 text-lg ${className}`} {...props} />;
};

export default FormInput;
