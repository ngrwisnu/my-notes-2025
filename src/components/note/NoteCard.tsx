import { Archive, Check, Trash2 } from "lucide-react";
import { Link } from "react-router";
// import { NoteCardProps } from "../../types/note";
import { MouseEvent } from "react";
import { formatCreatedAt } from "../../utils/notes";
import parse from "html-react-parser";
import PropTypes from "prop-types";

// @ts-expect-error used of prop-types
const NoteCard = (props) => {
  const {
    id,
    title,
    body,
    createdAt,
    archived,
    archiveHandler,
    deleteHandler,
  } = props;

  return (
    <div className="w-full rounded-lg border bg-[#F5EFFF] p-4 text-dark_purple-900 sm:max-w-[320px] dark:border-none dark:bg-dark_surface-900 dark:text-dark_purple-100">
      <Link to={`/note/${id}`} className="w-full hover:bg-slate-100">
        {/* card header */}
        <div className="mb-3 flex items-start justify-between gap-5">
          <div className="w-full">
            <h6 className="text-xl font-medium">{title}</h6>
          </div>
          <div className="relative z-10 flex h-10 items-center justify-center">
            <button
              className={`flex items-center gap-1 rounded-full border border-blue-400 ${archived ? "bg-blue-400" : "bg-transparent"} ${archived ? "text-white" : "text-inherit"} py-1 pl-2 pr-3 text-base`}
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
        <div className="mt-3 text-pretty text-lg">{parse(body)}</div>

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
            className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-200 text-red-500 hover:bg-red-500 hover:text-white"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </Link>
    </div>
  );
};

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  archiveHandler: PropTypes.func,
  deleteHandler: PropTypes.func,
};

export default NoteCard;
