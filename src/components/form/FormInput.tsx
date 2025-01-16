import { CustomInputProps } from "./types";

const FormInput: CustomInputProps = ({ className, ...props }) => {
  return (
    <input
      className={`dark:bg-dark_surface-700 dark:text-dark_purple-100 rounded-lg p-2 text-lg ${className}`}
      {...props}
    />
  );
};

export default FormInput;
