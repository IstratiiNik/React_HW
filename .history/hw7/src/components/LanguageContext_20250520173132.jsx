import { createContext, use } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
	const [language, setLanguage] = useState('en');
}
