import { useContext } from "react";
import { LocaleContext } from "../../context/contexts";

const LanguageToggler = () => {
  const { locale, setLocale } = useContext(LocaleContext);

  const changeHandler = () => {
    setLocale((prevState: string) => (prevState === "en" ? "id" : "en"));
  };

  return (
    <select
      value={locale}
      onChange={changeHandler}
      className="dark:text-dark_purple-100 border-none bg-transparent outline-none"
    >
      <option className="text-dark_purple-900" value="id">
        ID
      </option>
      <option className="text-dark_purple-900" value="en">
        EN
      </option>
    </select>
  );
};

export default LanguageToggler;
