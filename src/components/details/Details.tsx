import { ReactNode } from "react";
import parse from "html-react-parser";

export const DetailWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="">{children}</div>;
};

export const DetailTitle = ({ text }: { text: string }) => {
  return <div className="text-lg font-semibold">{text}</div>;
};

export const DetailDescription = ({ text }: { text: string }) => {
  return <div className="relative text-pretty">{parse(text)}</div>;
};
