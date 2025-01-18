/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent, useContext } from "react";
import { LocaleContext } from "../../context/contexts";
import { findByKeyword } from "../../utils/notes";
import { LocalType } from "../../types/locale";
import NoteCard from "./NoteCard";
import { NoteObject } from "../../types/note";

interface NoteWrapperProps {
  notes: NoteObject[];
  contents: { [key: string]: any };
  keywords?: string;
  archiveHandler: (e: MouseEvent<HTMLElement>, id: string) => void;
  deleteHandler: (e: MouseEvent<HTMLElement>, id: string) => void;
}

const NoteWrapper = ({
  notes,
  contents,
  keywords = "",
  archiveHandler,
  deleteHandler,
}: NoteWrapperProps) => {
  const { locale }: { locale: LocalType } = useContext(LocaleContext);

  const searchedNotes = findByKeyword(notes, keywords);

  return (
    <section className="flex flex-wrap gap-4">
      {!notes.length && <p>{contents.empty_notes[locale]}</p>}
      {notes.length && !searchedNotes.length ? (
        <p>{contents.not_found[locale]}</p>
      ) : null}
      {searchedNotes.map((note) => (
        <NoteCard
          key={note.id}
          deleteHandler={deleteHandler}
          archiveHandler={archiveHandler}
          {...note}
        />
      ))}
    </section>
  );
};

export default NoteWrapper;
