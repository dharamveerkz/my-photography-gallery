import { useEffect, useRef, useCallback } from "react";

/**
 * Custom hook for IntersectionObserver
 * @param {Function} callback - Runs when element enters viewport
 * @param {Object} options - IntersectionObserver options
 * @returns {React.RefObject} Ref to attach to the target element
 */
export const useIntersection = (callback, options = {}) => {
  const observerRef = useRef(null);
  const targetRef = useRef(null);

  const handleObserve = useCallback(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleObserve, {
      rootMargin: "100px",
      threshold: 0.01,
      ...options,
    });

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observerRef.current.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observerRef.current?.unobserve(currentTarget);
      observerRef.current?.disconnect();
    };
  }, [handleObserve, options]);

  return targetRef;
};