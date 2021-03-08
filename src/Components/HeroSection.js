import React, { useContext } from "react";
// import ThemeToggler from "./ThemeToggler";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../Themes";
import Content from "./Content";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.color,
      }}
    >
      <h1 style={{ textAlign: "center", paddingBottom: "20px", margin: "0" }}>
        Pexels Images
      </h1>
      <Content />
    </div>
  );
};

export default HeroSection;
