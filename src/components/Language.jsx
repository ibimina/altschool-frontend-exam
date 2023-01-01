import React from 'react'

export default function Language({language}) {
  return (
    <>
      {language === "CSS" && (
        <>
          <p className="f small">
            {" "}
            <span
              style={{
                backgroundColor: "purple",
                width: "15px",
                borderRadius: "50%",
                height: "15px",
                display: "inline-block",
              }}
            ></span>
            {language}
          </p>
        </>
      )}
      {language === "JavaScript" && (
        <>
          <p className="f small">
            {" "}
            <span
              style={{
                backgroundColor: "yellow",
                width: "15px",
                borderRadius: "50%",
                height: "15px",
                display: "inline-block",
              }}
            ></span>
            {language}
          </p>
        </>
      )}
      {language === "HTML" && (
        <>
          <p className="f small">
            {" "}
            <span
              style={{
                backgroundColor: "red",
                width: "15px",
                borderRadius: "50%",
                height: "15px",
                display: "inline-block",
              }}
            ></span>
            {language}
          </p>
        </>
      )}
      {language === "TypeScript" && (
        <>
          <p className="f small">
            {" "}
            <span
              style={{
                backgroundColor: "blue",
                width: "15px",
                borderRadius: "50%",
                height: "15px",
                display: "inline-block",
              }}
            ></span>
            {language}
          </p>
        </>
      )}
    </>
  );
}
