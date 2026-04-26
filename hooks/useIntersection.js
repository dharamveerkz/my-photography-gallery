
// src/hooks/useIntersection.js
import { useEffect, useRef } from "react";

export const useIntersection = (callback, options = {}) => {
  const observerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    }, {
      rootMargin: "100px",
      threshold: 0.01,
      ...options
    });

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [callback]);

  return targetRef;
};