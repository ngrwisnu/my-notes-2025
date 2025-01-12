import { Search } from "lucide-react";
import { ChangeEvent } from "react";
import { useSearchParams } from "react-router";
import { findByKeyword, getArchivedNotes } from "../utils/notes";
import NoteCard from "../components/note/NoteCard";

const Archive = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const notes = getArchivedNotes();

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      title: e.target.value,
    });
  };

  const title = searchParams.get("title") || "";

  const searchedNotes = findByKeyword(notes, title);

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
        {!notes.length && <p>Archive is empty!</p>}
        {notes.length && !searchedNotes.length ? (
          <p>Cannot find any notes</p>
        ) : null}
        {searchedNotes.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
