import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedImage = ({ src, alt, cName, duration }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const styles = useSpring({
    to: {
      opacity: inView ? 1 : 0,
    },
    from: {
      opacity: 0,
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
