"use client";

import { useState } from "react";
import Image from "next/image";

interface LogoImageProps {
  src: string;
  name: string;
  size?: number;
  className?: string;
  fallbackClassName?: string;
}

export function LogoImage({
  src,
  name,
  size = 56,
  className = "object-contain p-1",
  fallbackClassName = "text-sm font-bold gradient-text",
}: LogoImageProps) {
  const [error, setError] = useState(false);

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  if (error) {
    return (
      <span
        className={fallbackClassName}
        style={{ fontFamily: "Syne, sans-serif", fontSize: 13 }}
      >
        {initials}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      className={className}
      onError={() => setError(true)}
    />
  );
}