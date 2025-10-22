import React from "react";

interface Logo {
  src: string;
  alt?: string;
}

interface LogoRowProps {
  logos: Logo[];
  size?: number; // optional, controls image size (default 64px)
  className?: string; // optional extra styling
}

const LogoRow: React.FC<LogoRowProps> = ({ logos, size = 64, className }) => {
  return (
    <div
      className={`flex flex-nowrap items-center justify-center gap-6 overflow-x-auto sm:overflow-visible scrollbar-hide animate-fade-in-up ${className || ""}`}
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt || `Logo ${index + 1}`}
          className="object-contain grayscale hover:grayscale-0 transition duration-300 flex-shrink-0"
          style={{ width: size, height: size }}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default LogoRow;
