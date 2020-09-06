import React, { useState } from "react";

function useFound() {
  const [found, setFound] = useState(false);

  const handleMatch = () => setFound(true);

  return [found, handleMatch];
}

export function Switch({ children }) {
  const [found, onFound] = useFound();

  return React.Children.map(children, (child) => {
    if (typeof child.type === "string") {
      return child;
    }

    return React.cloneElement(child, {
      found,
      matched: onFound,
    });
  });
}
