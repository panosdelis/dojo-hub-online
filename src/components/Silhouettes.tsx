import React, { useEffect, useState, useRef } from "react";

interface Logo {
  src: string;
  alt?: string;
}

interface LogoRowProps {
  logos: Logo[];
  size?: number;
  speed?: number; // seconds per full scroll
  reverse?: boolean;
}

const LogoRow: React.FC<LogoRowProps> = ({ logos, size = 64, speed = 40, reverse = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState(4);
  const [distance, setDistance] = useState(0); // in px

  useEffect(() => {
    const updateRepeatCount = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const logoWidth = size + 16; // size + mx-4
      const neededRepeats = Math.ceil((containerWidth * 2) / (logos.length * logoWidth));
      setRepeatCount(neededRepeats);

      // total width of one loop of logos
      setDistance(logos.length * logoWidth * neededRepeats / 2); // half-loop for seamless scroll
    };

    updateRepeatCount();
    window.addEventListener("resize", updateRepeatCount);
    return () => window.removeEventListener("resize", updateRepeatCount);
  }, [logos, size]);

  const repeated = Array.from({ length: repeatCount }).flatMap(() => logos);

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      <div
        className={`flex whitespace-nowrap ${reverse ? "animate-scroll-reverse" : "animate-scroll"}`}
        style={{
          animationDuration: `${speed}s`,
          "--scroll-distance": `${distance}px`,
        } as React.CSSProperties}
      >
        {repeated.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt || `Logo ${idx + 1}`}
            className="object-contain mx-4 grayscale hover:grayscale-0 transition duration-300"
            style={{ width: size, height: size }}
            loading="lazy"
          />
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * var(--scroll-distance))); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(calc(-1 * var(--scroll-distance))); }
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
