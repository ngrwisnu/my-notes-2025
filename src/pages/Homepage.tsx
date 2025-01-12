"use client";

import { Search } from "lucide-react";
import NoteCard from "../components/note/NoteCard";
import { findByKeyword, setInitialNotes } from "../utils/notes";
import { ChangeEvent } from "react";
import { useSearchParams } from "react-router";

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const notes = setInitialNotes();

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      title: e.target.value,
    });
  };

  const title = searchParams.get("title") || "";

  const searchedNotes = findByKeyword(notes, title);

  return (
    <div className="container">
      <h1 className="mb-6 text-4xl font-semibold">Active Notes</h1>
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
        {!notes.length && <p>There is no active notes yet!</p>}
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

export default Homepage;
