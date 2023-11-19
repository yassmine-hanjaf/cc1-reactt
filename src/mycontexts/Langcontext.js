import React,{ createContext, useState } from "react";

export const Langc=createContext();

export default function Langcontext({children}) {
    const[lang,setlang]=useState('EN');
  return (
    <Langc.Provider value={{lang,setlang}}>
      {children}
    </Langc.Provider>
  )
}
