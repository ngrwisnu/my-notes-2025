import { Archive, EllipsisVertical, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { NoteObject } from "../../types/note";

const menu = [
  {
    text: "Archive",
    icon: <Archive size={20} />,
    linkTo: "/archive",
  },
  {
    text: "Delete",
    icon: <Trash2 size={20} />,
  },
];

const NoteCard = (props: NoteObject) => {
  const { id, title, body, createdAt } = props;

  return (
    <div className="max-w-[320px] basis-auto rounded-lg border border-slate-700 p-4">
      <Link to={`/detail/${id}`} className="w-full hover:bg-slate-100">
        {/* card header */}
        <div className="flex items-center justify-between gap-5">
          <div className="w-full">
            <h6 className="text-xl font-medium">{title}</h6>
          </div>
          <div className="relative flex h-10 w-10 items-center justify-center bg-transparent">
            <EllipsisVertical size={20} />
            <div className="absolute right-0 top-[calc(100%_+_16px)] gap-4 rounded-lg bg-white p-2 drop-shadow">
              <div className="flex w-32 flex-col gap-4">
                {menu.map((item) => (
                  <Link
                    key={item.text}
                    to={(item.linkTo && item.linkTo) || "/"}
                    className={`flex w-full gap-2 rounded px-4 py-2 hover:bg-slate-100 ${item.text === "Delete" && "hover:text-red-500"}`}
                  >
                    {item.icon}
                    <div className="">{item.text}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* card body */}
        <div className="mt-3 text-pretty text-lg text-slate-500">{body}</div>

        {/* card footer */}
        <div className="mt-3 flex justify-end">
          <div className="text-base text-slate-500">{createdAt}</div>
        </div>
      </Link>
    </div>
  );
};

export default NoteCard;
