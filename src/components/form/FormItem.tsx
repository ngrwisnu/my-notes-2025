import { ReactNode } from "react";

const FormItem = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

export default FormItem;
