"use client";

import { Plus } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import DOMPurify from "dompurify";
import { addNote } from "../utils/notes";
import { useNavigate } from "react-router";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const titleBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const bodyBlurHandler = (e: ChangeEvent<HTMLElement>) => {
    const purified = DOMPurify.sanitize(e.target.innerHTML);

    setBody(purified);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      title,
      body,
    };

    addNote(data);
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="mb-6 w-full text-center text-4xl font-semibold">
        Add New Note
      </h1>
      <form
        onSubmit={submitHandler}
        className="mx-auto grid w-full auto-rows-max gap-4 rounded-lg bg-slate-100 p-4 md:w-2/3"
      >
        <div className="grid">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="rounded-lg bg-white p-2 text-lg"
            onBlur={titleBlurHandler}
            name="title"
            id="title"
            autoFocus
          />
        </div>
        <div className="grid">
          <label htmlFor="body">Description</label>
          <div
            className="rounded-lg bg-white p-2 text-lg text-slate-700"
            onBlur={bodyBlurHandler}
            contentEditable
          ></div>
        </div>
        <button
          type="submit"
          className="ml-auto flex w-fit items-center gap-1 rounded-full bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
        >
          <Plus size={20} /> Add note
        </button>
      </form>
    </div>
  );
};

export default AddNoteForm;
