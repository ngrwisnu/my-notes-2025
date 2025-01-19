import { useParams } from "react-router";
import { formatDateToID } from "../utils/notes";
import {
  DetailDescription,
  DetailTitle,
  DetailWrapper,
} from "../components/details/Details";
import useCallAPI from "../hooks/useCallAPI";
import { getNote } from "../utils/api/lib";
import Loading from "../components/Loading";

const Details = () => {
  const { id } = useParams();
  const { data: note, loading, isError } = useCallAPI(() => getNote(id!));

  return (
    <div className="container">
      <div className="mx-auto grid w-full auto-rows-max gap-4 rounded-lg bg-slate-100 p-4 text-dark_purple-900 md:w-2/3 dark:bg-dark_surface-900 dark:text-dark_purple-100">
        {loading && <Loading />}
        {!loading && isError && (
          <p className="text-center text-lg font-medium">
            The note doesn't exist!
          </p>
        )}
        {!loading && !isError && (
          <>
            <DetailWrapper>
              <DetailTitle text="Title" />
              <DetailDescription text={note?.title || "-"} />
            </DetailWrapper>
            <DetailWrapper>
              <DetailTitle text="Description" />
              <DetailDescription text={note?.body || "-"} />
            </DetailWrapper>
            <DetailWrapper>
              <DetailTitle text="Created at" />
              <DetailDescription
                text={formatDateToID(note?.createdAt) || "-"}
              />
            </DetailWrapper>
            <DetailWrapper>
              <DetailTitle text="Status" />
              <DetailDescription
                text={!note ? "-" : note.archived ? "Archived" : "Active"}
              />
            </DetailWrapper>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
