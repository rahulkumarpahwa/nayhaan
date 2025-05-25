import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        outline: "none",
        padding: 0,
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 1000,
      }}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? (
        <img src="/buttons/sun.png" alt="Light mode" width={40} height={40} />
      ) : (
        <img src="/buttons/moon.png" alt="Dark mode" width={40} height={40} />
      )}
    </button>
  );
};

export default DarkMode;
