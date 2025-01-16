import { Search } from "lucide-react";
import { ChangeEvent } from "react";

interface SearchFieldProps {
  keywords: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField = ({ keywords, changeHandler }: SearchFieldProps) => {
  return (
    <div className="text-dark_purple-900 dark:bg-dark_surface-700 dark:text-dark_purple-100 mb-5 flex items-center overflow-hidden rounded-full bg-slate-100 pl-4">
      <Search size={20} />
      <input
        type="text"
        value={keywords}
        onChange={changeHandler}
        className="ml-4 w-full bg-transparent"
        placeholder="Search notes by title"
      />
    </div>
  );
};

export default SearchField;
