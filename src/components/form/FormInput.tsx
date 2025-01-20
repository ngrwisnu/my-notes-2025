// import { CustomInputProps } from "./types";

import PropTypes from "prop-types";

// @ts-expect-error used of prop-types
const FormInput = ({ className, ...props }) => {
  return (
    <input
      className={`rounded-lg p-2 text-lg dark:bg-dark_surface-700 dark:text-dark_purple-100 ${className}`}
      {...props}
    />
  );
};

FormInput.propTypes = {
  className: PropTypes.string,
};

export default FormInput;
