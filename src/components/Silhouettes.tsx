import React from "react";

interface Logo {
  src: string;
  alt?: string;
}

interface LogoRowProps {
  logos: Logo[];
  size?: number;
  speed?: number; // scroll speed (seconds)
  reverse?: boolean; // optional direction
}

const LogoRow: React.FC<LogoRowProps> = ({ logos, size = 64, speed = 40, reverse = false }) => {
  const repeated = [...logos, ...logos, ...logos, ...logos]; // 4× repetition for seamless looping

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex whitespace-nowrap animate-scroll ${reverse ? "animate-scroll-reverse" : ""}`}
        style={{
          animationDuration: `${speed}s`,
        }}
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

      {/* Animations + hover polish */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } /* forward */
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-75%); } /* start fully off-screen right */
          100% { transform: translateX(0); }  /* scroll into view */
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }

        /* Smooth animation optimization */
        .animate-scroll,
        .animate-scroll-reverse {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default LogoRow;
