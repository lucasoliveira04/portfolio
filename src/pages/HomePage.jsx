import { useState } from "react";
import HeaderComponent from "../components/_header";
import MainFirstPage from "../components/_mainFirstPage";
import "../../public/css/animation.css"

export const HomePage = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "pt");

  return (
    <div className="App">
      <HeaderComponent setLanguage={setLanguage} />
      <MainFirstPage language={language} />
    </div>
  );
};
