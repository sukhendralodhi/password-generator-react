import { useState } from "react";

const usePasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const generatePassword = () => {
        let charset = "", generatedPassword = "";

        const selectedOption = checkboxData.filter((checked) => checkbox.state);

        selectedOption.forEach((option) => {
            switch (option.title) {
                case "Include Uppercase Letters":
                    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    break;
                case "Include Lowercase Letters":
                    charset += "abcdefghijklmnopqrstuvwxyz";
                    break;
                case "Include Numbers":
                    charset += "0123456789";
                    break;
                case "Include Symbols":
                    charset += "!@#$%^&*()";
                    break;
                default:
                    break;
            }
        });
        for (let i = 0; i < length; i++) {
            ;

        }
    };
    return { password, errorMessage, generatePassword };
};

export default usePasswordGenerator;