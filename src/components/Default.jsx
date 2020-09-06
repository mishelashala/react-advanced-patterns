import React from "react";

export function Default({ found, children }) {
  return !found ? <>{children}</> : <></>;
}
