"use client";

import { Search } from "lucide-react";
import NoteCard from "../components/note/NoteCard";
import {
  archiveNote,
  findByKeyword,
  getActiveNotes,
  getNote,
} from "../utils/notes";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useSearchParams } from "react-router";
import { NoteObject } from "../types/note";

const Homepage = () => {
  const [noteList, setNoteList] = useState<NoteObject[]>(getActiveNotes());
  const [searchParams, setSearchParams] = useSearchParams();

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

  const title = searchParams.get("title") || "";

  const searchedNotes = findByKeyword(noteList, title);

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
        {!noteList.length && <p>There is no active notes yet!</p>}
        {noteList.length && !searchedNotes.length ? (
          <p>Cannot find any notes</p>
        ) : null}
        {searchedNotes.map((note) => (
          <NoteCard key={note.id} archiveHandler={archiveHandler} {...note} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
