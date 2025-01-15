import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";

export type CustomLabelProps = React.FC<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
> & {
  className?: string;
};

export type CustomInputProps = React.FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> & {
  className?: string;
};
