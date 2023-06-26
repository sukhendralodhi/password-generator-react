import { useState } from "react";

import usePasswordGenerator from "./hooks/use-password-generator";
import StrenthChecker from "./components/strenthChecker";

function App() {

  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState(
    [
      { title: "Include Uppercase Letters", state: false },
      { title: "Include Lowercase Letters", state: false },
      { title: "Include Numbers", state: false },
      { title: "Include Symbols", state: false },
    ]
  );
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updateCheckboxData = [...checkboxData];
    updateCheckboxData[i].state = !updateCheckboxData[i].state;
    setCheckboxData([...updateCheckboxData]);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }


  const { password, errorMessage, generatePassword } = usePasswordGenerator("");

  return (
    <>
      <div className="container">
        {password && (<div className="header">
          <div className="title">
            {password}
          </div>
          <button className="copyBtn" onClick={handleCopy}>{copied ? "Copied" : "copy"}</button>
        </div>)}
        <div className="charLength">
          <span>
            <label>Character Length:</label>
            <label>{length}</label>
          </span>
          <input type="range" min="4" max="20" onChange={(e) => setLength(e.target.value)} />
        </div>
        <div className="checkboxes">
          {
            checkboxData.map((checkbox, i) => {
              return (
                <div key={i}>
                  <input type="checkbox" onChange={() => handleCheckboxChange(i)} checked={checkbox.state} />
                  <label>{checkbox.title}</label>
                </div>
              );
            })
          }
        </div>
        <StrenthChecker />
        {
          errorMessage && (
            <div className="errorMsg">{errorMessage}</div>
          )
        }
        <button className="generateBtn" onClick={() => generatePassword(checkboxData, length)}>Generate Password</button>
      </div>
    </>
  )
}

export default App
