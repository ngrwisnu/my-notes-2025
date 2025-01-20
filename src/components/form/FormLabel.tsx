import PropTypes from "prop-types";
// import { CustomLabelProps } from "./types";

// @ts-expect-error used of prop-types
const FormLabel = ({ className = "", children, ...props }) => {
  return (
    <label className={className} {...props}>
      {children}
    </label>
  );
};

FormLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FormLabel;
