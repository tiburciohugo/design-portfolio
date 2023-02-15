import React from "react";

type color = string;

interface buttonProps {
  bg: color;
  hover: color;
  className?: string;
}

export default function Button({ bg, hover, className }: buttonProps) {
  return (
    <button
      className={`text-white px-6 py-2 font-semibold rounded-full ${bg} hover:${hover} ${className}`}
    >
      Free Consultation
    </button>
  );
}
