import { createContext } from "react";

// const [theme, setTheme] = useState("darkblue");

// mimic a useState hook
const ThemeContext = createContext(["green" , () => {}])

export default ThemeContext;