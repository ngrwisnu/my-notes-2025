import NoteCard from "../components/note/NoteCard";
import {
  archiveNote,
  deleteNote,
  findByKeyword,
  getActiveNotes,
  getNote,
} from "../utils/notes";
import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { useSearchParams } from "react-router";
import { NoteObject } from "../types/note";
import AddButtonFloat from "../components/AddButtonFloat";
import { LocaleContext } from "../context/contexts";
import { LocalType } from "../types/locale";
import contents from "../utils/contents";
import SearchField from "../components/SearchField";

const Homepage = () => {
  const [noteList, setNoteList] = useState<NoteObject[]>(getActiveNotes());
  const [searchParams, setSearchParams] = useSearchParams();

  const { locale }: { locale: LocalType } = useContext(LocaleContext);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      title: e.target.value,
    });
  };

  const archiveHandler = (e: MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation();
    e.preventDefault();

    const note = getNote(id) as NoteObject;

    if (!note.archived) {
      archiveNote(id);
    }

    setNoteList(getActiveNotes());
  };

  const deleteHandler = (e: MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation();
    e.preventDefault();

    const confirmStatus = confirm("Are you sure want to delete this note?");

    if (confirmStatus) {
      deleteNote(id);
      setNoteList(getActiveNotes());
    }
  };

  const keywords = searchParams.get("title") || "";

  const searchedNotes = findByKeyword(noteList, keywords);

  return (
    <div className="container relative">
      <h1 className="mb-6 text-4xl font-semibold">
        {contents.homepage.headline[locale]}
      </h1>
      <SearchField keywords={keywords} changeHandler={searchHandler} />
      <div className="flex flex-wrap gap-4">
        {!noteList.length && <p>{contents.homepage.empty_notes[locale]}</p>}
        {noteList.length && !searchedNotes.length ? (
          <p>{contents.homepage.not_found[locale]}</p>
        ) : null}
        {searchedNotes.map((note) => (
          <NoteCard
            key={note.id}
            deleteHandler={deleteHandler}
            archiveHandler={archiveHandler}
            {...note}
          />
        ))}
      </div>
      <AddButtonFloat />
    </div>
  );
};

export default Homepage;
