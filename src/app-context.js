import React from 'react';

export const AppContext = React.createContext({
    destinations: [],
    todos: [],
    users: [],
    addDestination: () => {},
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    updateCurrentUser: () => {}
 })