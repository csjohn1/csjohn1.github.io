import { useState, useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";

export default function LoadOnView({ children }) {
  const [entered, setEntered] = useState(false);
  const myRef = useRef();
  const { enterCount } = useInViewport(myRef);
  useEffect(() => {
    if (enterCount === 1) setEntered(true);
  }, [enterCount]);
  return <div ref={myRef}>{entered && children}</div>;
}
