import React, { useReducer } from 'react'
import toolboxContext from './toolbox-context.js'
import { TOOL_ITEMS, TOOLBOX_ACTIONS } from '../constants';
import {COLORS} from "../constants.js"

function toolboxReducer(state,action){
    switch (action.type) {
        case TOOLBOX_ACTIONS.CHANGE_STROKE:{
            const newState={...state};
            console.log(action.payload);
            newState[action.payload.tool].stroke=action.payload.stroke;
            return newState;

        }
            
            
        case TOOLBOX_ACTIONS.CHANGE_FILL:{
            const newState={...state};
            console.log(action.payload);
            newState[action.payload.tool].fill=action.payload.fill;
            return newState;
        }
        
        case TOOLBOX_ACTIONS.CHANGE_SIZE:{
            const newState={...state};
            console.log(action.payload);
            newState[action.payload.tool].size=action.payload.size;
            return newState;

        }
                
    
        default:
           return state;
    }
}


const initialToolboxState={
    [TOOL_ITEMS.BRUSH]:{
        stroke:COLORS.BLACK,
    },
    [TOOL_ITEMS.LINE]:{
        stroke:COLORS.BLACK,
        size:1,
    },
    [TOOL_ITEMS.RECTANGLE]:{
        stroke:COLORS.BLACK,
        fill:null,
        size:1,
    },
    [TOOL_ITEMS.CIRCLE]:{
        stroke:COLORS.BLACK,
        fill:null,
        size:1,
    },
    [TOOL_ITEMS.ARROW]:{
        stroke:COLORS.BLACK,
        size:1,
    },
    [TOOL_ITEMS.TEXT]:{
        stroke:COLORS.BLACK,
        size:32,
    },
    [TOOL_ITEMS.ERASER]:{
        size:1,
    },



}

const ToolBoxProvider = ({children}) => {

    const [toolboxState,dispatchToolboxAction]=useReducer(
        toolboxReducer,
        initialToolboxState,
    );


    const changeStrokeHandler=(tool,stroke)=>{
        // console.log(tool);
        dispatchToolboxAction({
            type:TOOLBOX_ACTIONS.CHANGE_STROKE,
            payload:{
                tool,
                stroke,
            },
        });
        
    };
    
    
    const changeFillHandler=(tool,fill)=>{
        // console.log(tool);
        dispatchToolboxAction({
            type:TOOLBOX_ACTIONS.CHANGE_FILL,
            payload:{
                tool,
                fill,
            },
        });

    };

    const changeSizeHandler=(tool,size)=>{
        // console.log(tool);
        dispatchToolboxAction({
            type:TOOLBOX_ACTIONS.CHANGE_SIZE,
            payload:{
                tool,
                size,
            },
        });

    };



    const toolboxContextValue={
        toolboxState,
        changeStrokeHandler,
        changeFill:changeFillHandler,
        changeSize:changeSizeHandler,

    };

  return (
    <toolboxContext.Provider value={toolboxContextValue}>
        {children}
    </toolboxContext.Provider>
  )
}

export default ToolBoxProvider;