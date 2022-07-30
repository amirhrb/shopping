import React, { useEffect, useState, createContext } from "react";

export const scrollContext = createContext();

//this context is used to better experience in onscroll UI animations
const ScrollProvider = ({ children }) => {
  const [isScrolled, setScroll] = useState(false);

  //when component is fully mounted addEv.. to window to check if
  //is scrolled set our state as true or otherwise
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setScroll(true) : setScroll(false);
    });
  }, []);

  return (
    <scrollContext.Provider value={isScrolled}>
      {children}
    </scrollContext.Provider>
  );
};

export default ScrollProvider;
