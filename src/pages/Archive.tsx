import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router";
import {
  findByKeyword,
  getArchivedNotes,
  getNote,
  unarchiveNote,
} from "../utils/notes";
import NoteCard from "../components/note/NoteCard";
import { NoteObject } from "../types/note";
import { MouseEvent } from "react";

const Archive = () => {
  const [noteList, setNoteList] = useState<NoteObject[]>(getArchivedNotes());
  const [searchParams, setSearchParams] = useSearchParams();

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

  const title = searchParams.get("title") || "";

  const searchedNotes = findByKeyword(noteList, title);

  return (
    <div className="container">
      <h1 className="mb-6 text-4xl font-semibold">Archived Notes</h1>
      <div className="mb-5 flex items-center overflow-hidden rounded-full bg-slate-100 pl-4">
        <Search size={20} />
        <input
          type="text"
          value={title}
          onChange={searchHandler}
          className="ml-4 w-full"
          placeholder="Search notes by title"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        {!noteList.length && <p>Archive is empty!</p>}
        {noteList.length && !searchedNotes.length ? (
          <p>Cannot find any notes</p>
        ) : null}
        {searchedNotes.map((note) => (
          <NoteCard key={note.id} archiveHandler={unArchiveNote} {...note} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
