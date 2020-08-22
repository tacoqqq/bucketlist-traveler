import React from 'react';
import { imgData } from '../src/img/img-data';


export const AppContext = React.createContext({
    destinations: [],
    todos: [],
    user: {},
    heroImgs: imgData,
    addDestination: () => {},
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    deleteDestination: () => {},
 })