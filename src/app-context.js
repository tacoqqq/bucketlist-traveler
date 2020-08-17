import React from 'react';

export const AppContext = React.createContext({
    destinations: [],
    todos: [],
    user: {},
    addDestination: () => {},
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    deleteDestination: () => {},
 })