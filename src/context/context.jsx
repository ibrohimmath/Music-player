import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Context.Provider value={{ openSidebar, setOpenSidebar }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
