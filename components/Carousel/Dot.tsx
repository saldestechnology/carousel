import React from "react";

interface DotProps {
  active: boolean;
}

export default function Dot({ active }: DotProps) {
  return (
    <div
      style={{
        height: 8,
        width: 8,
        background: active ? "#000" : "rgb(226 226 226)",
        borderRadius: 10,
      }}
    />
  );
}
