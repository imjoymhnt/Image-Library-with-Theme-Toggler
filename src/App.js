import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <React.Fragment>
        <HeroSection />
      </React.Fragment>
    </ThemeContext.Provider>
  );
};

export default App;
