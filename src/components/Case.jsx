import React, { useEffect } from "react";
import { useMatch } from "./Match";

export function Case({ match, children, matched }) {
  const value = useMatch();

  useEffect(() => {
    if (match === value) {
      matched();
    }
  }, [match, value, matched]);

  return match === value ? <>{children}</> : <></>;
}

Case.displayName = "Case";
