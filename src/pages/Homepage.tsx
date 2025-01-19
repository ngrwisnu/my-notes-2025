import { ChangeEvent, MouseEvent, useContext } from "react";
import { useSearchParams } from "react-router";
import AddButtonFloat from "../components/AddButtonFloat";
import { LocaleContext } from "../context/contexts";
import { LocalType } from "../types/locale";
import contents from "../utils/contents";
import SearchField from "../components/SearchField";
import NoteWrapper from "../components/note/NoteWrapper";
import useCallAPI from "../hooks/useCallAPI";
import { archiveNote, deleteNote, getActiveNotes } from "../utils/api/lib";
import Loading from "../components/Loading";

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: noteList, loading, refetch } = useCallAPI(getActiveNotes);

  const { locale }: { locale: LocalType } = useContext(LocaleContext);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      title: e.target.value,
    });
  };

  const archiveHandler = async (e: MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation();
    e.preventDefault();

    const result = await archiveNote(id);

    if (!result.isError) {
      refetch();
    }
  };

  const deleteHandler = async (e: MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation();
    e.preventDefault();

    const confirmStatus = confirm("Are you sure want to delete this note?");

    if (!confirmStatus) {
      return;
    }

    const result = await deleteNote(id);

    if (!result.isError) {
      refetch();
    }
  };

  const keywords = searchParams.get("title") || "";

  return (
    <div className="container relative">
      <h1 className="mb-6 text-4xl font-semibold">
        {contents.homepage.headline[locale]}
      </h1>
      <SearchField keywords={keywords} changeHandler={searchHandler} />
      {loading && <Loading />}
      {!loading && (
        <NoteWrapper
          keywords={keywords}
          notes={noteList || []}
          contents={contents.homepage}
          archiveHandler={archiveHandler}
          deleteHandler={deleteHandler}
        />
      )}
      <AddButtonFloat />
    </div>
  );
};

export default Homepage;
