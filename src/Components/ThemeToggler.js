import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Button from "@material-ui/core/Button";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      >
        {themeMode === "light" ? "Make Dark" : "Feel Light"}
      </Button>
    </div>
  );
};

export default ThemeToggler;
