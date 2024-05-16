import React from "react";

const Context = React.createContext({
  isNew: true,
  setIsNew: (data: boolean) => {
    return data;
  },
  util: {
    loader: false,
    setLoader: (data: boolean) => {
      return data;
    },
  },
  maximized: false,
  handleMaximizeToggle: (data: boolean) => {
    return data;
  },
  closed: false,
  handleClose: (data: boolean) => {
    return data;
  },
  history: {
    storedLi: [] as Array<JSX.Element>,
    STOREDLI: [] as string[],
    addStoredLi: (data: JSX.Element[]) => {
      return data;
    },
    addSTOREDLI: (data: string) => {
      return data;
    },
    clearStoredLi: () => {
      return;
    },
    clearSTOREDLI: () => {
      return;
    },
  },
  suggestions: [] as string[],
  setSuggestions: (data: string) => {
    return data;
  },
  clearSuggestions: () => {
    return;
  },
});

export default Context;
