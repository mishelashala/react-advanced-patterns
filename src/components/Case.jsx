import React, { useEffect } from "react";

export function Case({ value, match, children, matched }) {
  useEffect(() => {
    if (match === value) {
      matched();
    }
  }, [match, value, matched]);

  return match === value ? <>{children}</> : <></>;
}

Case.displayName = "Case";
