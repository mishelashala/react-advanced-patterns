import React from "react";

export function Address({ data }) {
  return (
    <div>
      <h2>Address:</h2>
      <p>
        {data.street} #{data.exteriorNumber}
      </p>
    </div>
  );
}
