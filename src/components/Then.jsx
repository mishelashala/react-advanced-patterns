import React from "react";

export function Then({ predicate, children }) {
  return predicate ? <>{children}</> : <></>;
}
