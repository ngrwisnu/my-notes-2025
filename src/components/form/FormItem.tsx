import PropTypes from "prop-types";
// import { ReactNode } from "react";

// @ts-expect-error used of prop-types
const FormItem = ({ children }) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

FormItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormItem;
