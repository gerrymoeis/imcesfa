import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const useParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], ['-25%', '25%'], {
    clamp: false,
  });

  return { ref, y };
};
