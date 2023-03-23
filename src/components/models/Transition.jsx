import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

export default function Transition({ element }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 700);
  }, [ref.current]);

  const props = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? `translateY(0)` : `translateY(-50px)`,
  });

  return <animated.div style={props}>{visible ? element : null}</animated.div>;
}
