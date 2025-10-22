import React, { useEffect, useState } from "react";

interface Logo {
  src: string;
  alt?: string;
}

interface LogoRowProps {
  logos: Logo[];
  size?: number;
  speed?: number; // scroll speed in seconds
  reverse?: boolean; // scroll direction
}

const LogoRow: React.FC<LogoRowProps> = ({ logos, size = 64, speed = 40, reverse = false }) => {
  const [repeatCount, setRepeatCount] = useState(4);

  useEffect(() => {
    const updateRepeatCount = () => {
      const screenWidth = window.innerWidth;
      const logosWidth = logos.length * (size + 16); // size + margin (mx-4)
      const needed = Math.ceil(screenWidth / logosWidth) * 4; // repeat enough times
      setRepeatCount(needed);
    };

    updateRepeatCount();
    window.addEventListener("resize", updateRepeatCount);
    return () => window.removeEventListener("resize", updateRepeatCount);
  }, [logos, size]);

  const repeated = Array.from({ length: repeatCount }).flatMap(() => logos);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex whitespace-nowrap animate-scroll ${reverse ? "animate-scroll-reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeated.map((logo, index) => (
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

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-75%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse linear infinite;
        }
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
        .animate-scroll,
        .animate-scroll-reverse {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default LogoRow;
