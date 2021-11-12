import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = (arg1: number) => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);
  const tl = useRef(gsap.timeline());
  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, arg1));
    return;
  };

  useLayoutEffect(() => {
    // if (counter < 10) return;
    // console.log("Numero maximo");

    tl.current.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    });
    tl.current.to(counterElement.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    }).pause();
  }, [])
  useEffect(() => {
    tl.current.play(0)
  }, [counter]);

  return {
    counterElement,
    handleClick,
    counter,
  };
};
