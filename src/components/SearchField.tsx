import { Search } from "lucide-react";
import PropTypes from "prop-types";
// import { ChangeEvent } from "react";

// interface SearchFieldProps {
//   keywords: string;
//   changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
// }

// @ts-expect-error used of prop-types
const SearchField = ({ keywords, changeHandler }) => {
  return (
    <div className="mb-5 flex items-center overflow-hidden rounded-full bg-slate-100 pl-4 text-dark_purple-900 dark:bg-dark_surface-700 dark:text-dark_purple-100">
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

SearchField.propTypes = {
  keywords: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default SearchField;
