import { createContext } from "react";
import { useState } from "react";

const toolboxContext=createContext({
    toolboxState:{},
    changeStroke: () => {},
    changeFill:()=>{},
    changeSize:()=>{},
});


export const ToolboxProvider = ({ children }) => {
    const [toolboxState, setToolboxState] = useState({});
  
    const changeStroke = (toolItem, color) => {
      setToolboxState((prev) => ({
        ...prev,
        [toolItem]: { ...prev[toolItem], stroke: color },
      }));
    };
  
    return (
      <toolboxContext.Provider value={{ toolboxState, changeStroke }}>
        {children}
      </toolboxContext.Provider>
    );
  };



export default toolboxContext;


