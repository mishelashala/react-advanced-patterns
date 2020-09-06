import React from "react";

export function If({ predicate, children }) {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { predicate });
  });
}
