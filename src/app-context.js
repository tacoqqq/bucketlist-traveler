import React from 'react';

export const AppContext = React.createContext({
    destinations: [],
    todos: [],
    users: [],
    currentUser: {},
    currentLoggedIn: false,
    addDestination: () => {},
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    deleteDestination: () => {},
    updateCurrentUser: () => {},
    addUser: () => {},
    checkTodo: () => {}
 })