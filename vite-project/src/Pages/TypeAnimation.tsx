import { useEffect, useState } from "react";

const text = "Fancy Labs";

function TypedAnimation() {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl md:text-5xl font-mono flex">
        {typedText}
        <span className="ml-1 animate-blink">|</span>
      </h1>
    </div>
  );
}

export default TypedAnimation;
