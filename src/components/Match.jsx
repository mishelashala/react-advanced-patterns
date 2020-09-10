import React, { createContext, useContext } from "react";

export const MatchContext = createContext();

export function useMatch() {
  return useContext(MatchContext);
}

export function Match({ value, children }) {
  return (
    <MatchContext.Provider value={value}>
      <>{children}</>
    </MatchContext.Provider>
  );
}
