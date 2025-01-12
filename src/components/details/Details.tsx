import { SquarePen } from "lucide-react";
import { ReactNode } from "react";

export const DetailWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="">{children}</div>;
};

export const DetailTitle = ({ text }: { text: string }) => {
  return <div className="text-lg font-semibold">{text}</div>;
};

export const DetailDescription = ({
  text,
  editable,
}: {
  text: string;
  editable?: boolean;
}) => {
  return (
    <div className="relative text-pretty" contentEditable={editable}>
      {text}{" "}
      <span className="absolute translate-x-1">
        {editable && <SquarePen size={18} />}
      </span>
    </div>
  );
};
