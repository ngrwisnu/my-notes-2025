"use client";

import { useParams } from "react-router";
import { formatDateToID, getNote } from "../utils/notes";
import {
  DetailDescription,
  DetailTitle,
  DetailWrapper,
} from "../components/details/Details";

const Details = () => {
  const { id } = useParams();

  const note = getNote(id || "");

  return (
    <div className="container">
      <div className="mx-auto grid w-full auto-rows-max gap-4 rounded-lg bg-slate-100 p-4 md:w-2/3">
        <DetailWrapper>
          <DetailTitle text="Title" />
          <DetailDescription text={note?.title || ""} />
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle text="Description" />
          <DetailDescription text={note?.body || ""} />
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle text="Created at" />
          <DetailDescription text={formatDateToID(note?.createdAt)} />
        </DetailWrapper>
        <DetailWrapper>
          <DetailTitle text="Status" />
          <DetailDescription text={note?.archived ? "Archived" : "Active"} />
        </DetailWrapper>
      </div>
    </div>
  );
};

export default Details;
