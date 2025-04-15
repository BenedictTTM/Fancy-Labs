import { useEffect, useState } from "react";
import Fancy from '../../public/FancyLabs.png'


const text = "Best mobile app developme...";

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
    <div>
        <div className="h-screen bg-black ">
        <div className="flex flex-col items-center justify-center  p-30  ">
        <div className="relative flex items-center justify-center">
  <div className="absolute w-30 h-30 rounded-full bg-red-500 blur-3xl opacity-30 animate-pulse"></div>
  <img src={Fancy} alt="Fancy Labs" className="h-30 relative z-10 animate-pulse " />
</div>
        <h3 className=" text-5xl font-mono bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> <span className="-ml-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 "> Fancy</span>  Labs</h3>
        <h1 className="text-sm p-4  font-mono text-pink-900 "> 
        {typedText} 
        <span className="animate-blink">|</span></h1>
        </div>
        </div>
    </div>

  );
}

export default TypedAnimation;
