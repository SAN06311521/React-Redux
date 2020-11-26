import React, { createContext, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {intialState, reducer as NotesReducers} from '../reduceers/NotesReducers';

export const NotesContext = createContext()

export const NotesProvider = ({children}) => {

    const [state,dispatch] = useReducer(NotesReducers, intialState)

    return(
        <NotesContext.Provider value={{state:state, dispatch:dispatch}}>
            {children}
        </NotesContext.Provider>
    )
}