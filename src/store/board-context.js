import { createContext } from "react";

const boardContext=createContext({
    activeToolItems:"",
    toolActionType:"",
    elements:[],
    history:[[]],
    index:0,
    boardMouseDownHandler:()=>{},
    changeToolHandler:()=>{},
    boardMouseMoveHandler:()=>{},
    boardMouseUpHandler:()=>{},

})

export default boardContext;