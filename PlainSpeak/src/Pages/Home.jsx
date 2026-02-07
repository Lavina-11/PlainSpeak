import { useState } from "react";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import LanguageSelector from "../components/LanguageSelector";
import ToneSelector from "../components/ToneSelector";
import ActionButton from "../components/ActionButton";
import OutputBox from "../components/OutputBox";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [language, setLanguage] = useState("en");
  const [tone, setTone] = useState("simple");
  const [output, setOutput] = useState("");

  const handleSimplify = () => {
    // Temporary placeholder
    setOutput("This is where localized output will appear.");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "1rem" }}>
      <Header />
      <TextInput value={inputText} onChange={setInputText} />
      <LanguageSelector value={language} onChange={setLanguage} />
      <ToneSelector value={tone} onChange={setTone} />
      <ActionButton onClick={handleSimplify} />
      <OutputBox output={output} />
    </div>
  );
};

export default Home;
