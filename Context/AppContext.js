import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext()


export default function Appprovider({children}){
    const [isDarkMode, setIsDarkMode] = useState(() => false);

 
 const value ={
   isDarkMode , setIsDarkMode
 }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}