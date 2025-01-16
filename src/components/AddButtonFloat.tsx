import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import { LocaleContext } from "../context/contexts";
import { useContext } from "react";
import { LocalType } from "../types/locale";
import contents from "../utils/contents";

const AddButtonFloat = () => {
  const navigate = useNavigate();

  const { locale }: { locale: LocalType } = useContext(LocaleContext);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-transparent">
      <div className="container h-14">
        <button
          type="button"
          className="ml-auto flex w-fit items-center gap-1 rounded-full bg-indigo-600 px-3 py-2 text-white shadow-2xl hover:bg-indigo-700"
          onClick={() => navigate("/notes/new")}
        >
          <Plus size={20} /> {contents.float_button[locale]}
        </button>
      </div>
    </div>
  );
};

export default AddButtonFloat;
