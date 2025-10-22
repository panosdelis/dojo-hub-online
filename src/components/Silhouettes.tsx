import React from "react";

interface Logo {
  src: string;
  alt?: string;
}

interface LogoRowProps {
  logos: Logo[];
  size?: number;
  speed?: number; // optional: controls scroll speed (default 30s)
}

const LogoRow: React.FC<LogoRowProps> = ({ logos, size = 64, speed = 30 }) => {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex animate-scroll whitespace-nowrap"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {/* Duplicate the logos twice for seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt || `Logo ${index + 1}`}
            className="object-contain mx-4 grayscale hover:grayscale-0 transition duration-300"
            style={{ width: size, height: size }}
            loading="lazy"
          />
        ))}
      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoRow;
