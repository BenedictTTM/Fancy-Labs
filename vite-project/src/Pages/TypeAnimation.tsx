import { useEffect, useState } from "react";
import Fancy from '../../public/fancyL.png';

const text = "Where ideas get fancy";

function TypedAnimation() {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index <= text.length) {
      const timeout = setTimeout(() => {
        setTypedText(text.slice(0, index));
        setIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      // Reset after delay
      const resetTimeout = setTimeout(() => {
        setIndex(0);
      }, 2000); // Wait before restarting
      return () => clearTimeout(resetTimeout);
    }
  }, [index]);

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-40 h-40 rounded-full bg-red-500 blur-3xl opacity-30 animate-pulse"></div>
        <img src={Fancy} alt="Fancy Labs" className="h-24 sm:h-32 relative z-10 animate-pulse" />
      </div>

      {/* Shimmer Gold Gradient Title */}
      <h3 className="text-4xl sm:text-5xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 relative inline-block animate-textShimmer">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
          Fancy
        </span>{" "}
        Labs
        <span className="absolute top-0 left-0 w-full h-full shimmer-overlay"></span>
      </h3>

      {/* Typing Text */}
      <h1 className="text-sm sm:text-lg p-4 font-mono text-yellow-700">
        {typedText}
        <span className="animate-blink">|</span>
      </h1>

      {/* Custom styles for shimmer and blinking */}
      <style >{`
        .animate-blink {
          animation: blink 1s steps(2, start) infinite;
        }

        @keyframes blink {
          to {
            visibility: hidden;
          }
        }

        .animate-textShimmer {
          background-size: 200% auto;
          animation: shimmer 2s linear infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .shimmer-overlay {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

export default TypedAnimation;
