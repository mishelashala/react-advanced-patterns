import React from "react";

export function Else({ predicate, children }) {
  return !predicate ? <>{children}</> : <></>;
}
