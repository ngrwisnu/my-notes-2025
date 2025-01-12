import { Archive, Check, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { NoteCardProps } from "../../types/note";
import { MouseEvent } from "react";
import { formatCreatedAt } from "../../utils/notes";

const NoteCard = (props: NoteCardProps) => {
  const {
    id,
    title,
    body,
    createdAt,
    archived,
    archiveHandler,
    deleteHandler,
  } = props;

  const linkHandler = () => {
    console.log("link clicked");
  };

  return (
    <div className="max-w-[320px] basis-auto rounded-lg border border-slate-700 p-4">
      <Link
        to={`/detail/${id}`}
        onClick={linkHandler}
        className="w-full hover:bg-slate-100"
      >
        {/* card header */}
        <div className="mb-3 flex items-start justify-between gap-5">
          <div className="w-full">
            <h6 className="text-xl font-medium">{title}</h6>
          </div>
          <div className="relative z-10 flex h-10 items-center justify-center">
            <button
              className={`flex items-center gap-1 rounded-full border border-blue-400 ${archived ? "bg-blue-400" : "bg-transparent"} ${archived ? "text-white" : "text-black"} px-2 py-1 text-base`}
              onClick={(e: MouseEvent<HTMLElement>) => {
                if (archiveHandler) {
                  archiveHandler(e, id);
                }
              }}
            >
              {archived ? <Check size={18} /> : <Archive size={18} />}

              {archived ? "Archived" : "Archive"}
            </button>
          </div>
        </div>

        <hr />

        {/* card body */}
        <div className="mt-3 text-pretty text-lg text-slate-500">{body}</div>

        {/* card footer */}
        <div className="mt-3 flex justify-between">
          <div className="text-base text-slate-500">
            {formatCreatedAt(createdAt)}
          </div>
          <button
            onClick={(e) => {
              if (deleteHandler) {
                deleteHandler(e, id);
              }
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-red-500 hover:bg-red-500 hover:text-white"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default NoteCard;
