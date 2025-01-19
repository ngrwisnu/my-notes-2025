import { Plus } from "lucide-react";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router";
import { LocaleContext } from "../context/contexts";
import { LocalType } from "../types/locale";
import contents from "../utils/contents";
import { addNote } from "../utils/api/lib";

const AddNoteForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const { locale }: { locale: LocalType } = useContext(LocaleContext);

  const titleBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const bodyBlurHandler = (e: ChangeEvent<HTMLElement>) => {
    const purified = DOMPurify.sanitize(e.target.innerHTML);

    setBody(purified);
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      title,
      body,
    };

    const result = await addNote(data);

    if (!result.isError) {
      navigate("/");
    }
  };

  return (
    <div className="container dark:text-dark_purple-100">
      <h1 className="mb-6 w-full text-center text-4xl font-semibold">
        {contents.addNote.headline[locale]}
      </h1>
      <form
        onSubmit={submitHandler}
        className="mx-auto grid w-full auto-rows-max gap-4 rounded-lg bg-slate-100 p-4 md:w-2/3 dark:bg-dark_surface-900"
      >
        <div className="grid">
          <label htmlFor="title">{contents.addNote.form.title[locale]}</label>
          <input
            type="text"
            className="rounded-lg bg-white p-2 text-lg dark:bg-dark_surface-700 dark:text-dark_purple-100"
            onBlur={titleBlurHandler}
            name="title"
            id="title"
            autoFocus
          />
        </div>
        <div className="grid">
          <label htmlFor="body">
            {contents.addNote.form.description[locale]}
          </label>
          <div
            className="rounded-lg bg-white p-2 text-lg text-slate-700 dark:bg-dark_surface-700 dark:text-dark_purple-100"
            onBlur={bodyBlurHandler}
            contentEditable
          ></div>
        </div>
        <button
          type="submit"
          className="ml-auto flex w-fit items-center gap-1 rounded-full bg-indigo-600 px-3 py-2 text-white hover:bg-indigo-700"
        >
          <Plus size={20} /> {contents.addNote.form.button[locale]}
        </button>
      </form>
    </div>
  );
};

export default AddNoteForm;
