import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode, 'checking the boolean')

  function onDarkModeClick() {
    const darkChange = !isDarkMode
    setIsDarkMode(darkChange);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDark={isDarkMode} />
      {/* <Header toggler={onDarkModeClick} isDark={isDarkMode} /> */}
      <ShoppingList items={itemData} />
    </div>
  )
}

export default App;
