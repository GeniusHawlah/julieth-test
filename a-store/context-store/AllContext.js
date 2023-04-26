import { createContext, useEffect, useState } from "react";

const AllContext = createContext();

export function AllContextProvider(props) {


  const context = {
   
  };

  useEffect(() => {}, []);

  return (
    <AllContext.Provider value={context}>{props.children}</AllContext.Provider>
  );

  // functions below
}

export default AllContext;
