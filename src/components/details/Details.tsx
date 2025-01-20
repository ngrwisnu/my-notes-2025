// import { ReactNode } from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";

// @ts-expect-error used of prop-types
const DetailWrapper = ({ children }) => {
  return <div className="">{children}</div>;
};

// @ts-expect-error used of prop-types
const DetailTitle = ({ text }) => {
  return <div className="text-lg font-semibold">{text}</div>;
};

// @ts-expect-error used of prop-types
const DetailDescription = ({ text }) => {
  return <div className="relative text-pretty">{parse(text)}</div>;
};

DetailWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

DetailTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

DetailDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

export { DetailWrapper, DetailTitle, DetailDescription };
