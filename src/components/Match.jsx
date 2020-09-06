import React, { useContext, createContext } from "react";

export const MatchContext = createContext();

MatchContext.displayName = "MatchContext";

export function useMatch() {
  return useContext(MatchContext);
}

export function Match({ value, children }) {
  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
}
