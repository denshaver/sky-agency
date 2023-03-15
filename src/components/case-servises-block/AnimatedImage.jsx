import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedImage = ({ src, alt, cName, duration }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const styles = useSpring({
    to: {
      opacity: inView ? 1 : 0,
      transform: inView
        ? "translateX(0px) rotate(-8.28deg)"
        : "translateX(200px)",
    },
    from: {
      opacity: 0,
      transform: "translateX(200px) rotate(-8.28deg)",
    },
    config: {
      duration,
    },
  });

  return (
    <animated.img
      ref={ref}
      style={styles}
      src={src}
      alt={alt}
      className={cName}
    />
  );
};

export default AnimatedImage;
