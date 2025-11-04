import React from "react";

type TechListProps = {
  tech: string[];
};

export function TechList({ tech }: TechListProps) {
  if (!tech || tech.length === 0) return null; 

  return (
    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
      {tech.map((item, index) => (
        <span key={index}>{item} </span>
      ))}
    </p>
  );
}
