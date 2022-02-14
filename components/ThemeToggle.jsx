import { FaSun, FaMoon } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { useLoaded } from "../Hooks/useLoaded";

const Toggle = () => {
  const { theme, setTheme } = useContext(AppContext);
  const loaded = useLoaded();

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {loaded && theme === "dark" ? (
        <FaSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-yellow-400 dark:text-yellow-400 text-2xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
