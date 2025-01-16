import { ChangeEvent, useContext, useState } from "react";
import { useSearchParams } from "react-router";
import {
  deleteNote,
  findByKeyword,
  getArchivedNotes,
  getNote,
  unarchiveNote,
} from "../utils/notes";
import NoteCard from "../components/note/NoteCard";
import { NoteObject } from "../types/note";
import { MouseEvent } from "react";
import AddButtonFloat from "../components/AddButtonFloat";
import { LocaleContext } from "../context/contexts";
import { LocalType } from "../types/locale";
import contents from "../utils/contents";
import SearchField from "../components/SearchField";

const Archive = () => {
  const [noteList, setNoteList] = useState<NoteObject[]>(getArchivedNotes());
  const [searchParams, setSearchParams] = useSearchParams();

  const { locale }: { locale: LocalType } = useContext(LocaleContext);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      title: e.target.value,
    });
  };

  const unArchiveNote = (e: MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation();
    e.preventDefault();

    const note = getNote(id);

    if (note!.archived) {
      unarchiveNote(id);
    }

    setNoteList(getArchivedNotes());
  };

  const deleteHandler = (e: MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation();
    e.preventDefault();

    const confirmStatus = confirm("Are you sure want to delete this note?");

    if (confirmStatus) {
      deleteNote(id);
      setNoteList(getArchivedNotes());
    }
  };

  const keywords = searchParams.get("title") || "";

  const searchedNotes = findByKeyword(noteList, keywords);

  return (
    <div className="container">
      <h1 className="mb-6 text-4xl font-semibold">
        {contents.archive.headline[locale]}
      </h1>
      <SearchField keywords={keywords} changeHandler={searchHandler} />
      <div className="flex flex-wrap gap-4">
        {!noteList.length && <p>{contents.archive.empty_notes[locale]}</p>}
        {noteList.length && !searchedNotes.length ? (
          <p>{contents.archive.not_found[locale]}</p>
        ) : null}
        {searchedNotes.map((note) => (
          <NoteCard
            key={note.id}
            archiveHandler={unArchiveNote}
            deleteHandler={deleteHandler}
            {...note}
          />
        ))}
      </div>
      <AddButtonFloat />
    </div>
  );
};

export default Archive;
