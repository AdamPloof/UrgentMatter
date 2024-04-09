import React, { createContext } from "react";
import { MODE } from "../includes/consts";

export const ModeContext  = createContext(MODE.STD);

export const ModeProvider = (props) => {
    return (
        <ModeContext.Provider value={props.mode}>
            {props.children}
        </ModeContext.Provider>
    );
};
