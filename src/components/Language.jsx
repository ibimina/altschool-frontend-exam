import React from 'react'
import"./language.css"
export default function Language({language}) {
  return (
    <>
      {language !== null && (
        <p className="language_flex language_text">
          {" "}
          <span
            className={`${
              language === "CSS"
                ? "language_color css"
                : language === "JavaScript"
                ? "language_color javascript"
                : language === "HTML"
                ? "language_color html"
                : language === "TypeScript"
                ? "language_color typescript"
                : null
            }`}
          ></span>
          {language}
        </p>
      )}
    </>
  );
}
