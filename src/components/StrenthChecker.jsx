import React from "react";

const StrenthChecker = (password) => {
    const getPasswordStrenth = () => {
        const passwordLength = password.length;

        if (passwordLength < 1) {
            return "";
        } else if (passwordLength < 4) {
            return "Very Weak";
        } else if (passwordLength < 8) {
            return "Poor";
        } else if (passwordLength < 12) {
            return "Medium";
        } else if (passwordLength < 16) {
            return "Strong"
        } else {
            return "Very Strong"
        }
    };
    const passwordStrenth = getPasswordStrenth();
    if (!passwordStrenth) return <React.Fragment />;

    return (
        <div className="password-strenth">
            Strenth: <span style={{ fontWeight: 'bold' }}>{passwordStrenth}</span>
        </div>
    )
};

export default StrenthChecker;