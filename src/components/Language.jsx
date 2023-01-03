import React from 'react'
import"./language.css"
export default function Language({language}) {
  return (
    <>
      <p className="language_flex language_text">
        {" "}
        <span
          className={`language_color ${language === "CSS"
              ? "css"
              : language === "JavaScript"
              ? "javascript"
              : language === "HTML"
              ? "html"
              : language === "TypeScript"
              ?"typescript":
              ""}`}
        ></span>
        {language}
      </p>
    </>
  );
}
