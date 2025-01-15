import { CustomLabelProps } from "./types";

const FormLabel: CustomLabelProps = ({ className, children, ...props }) => {
  return (
    <label className={className} {...props}>
      {children}
    </label>
  );
};

export default FormLabel;
