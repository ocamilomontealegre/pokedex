import { useEffect, useRef } from "react";

export const useInfiniteScrollObserver = (fetchNextPage: () => void, hasNextPage: boolean) => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        fetchNextPage();
      }
    });

    const currentObserverRef = observerRef.current;
    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [hasNextPage, fetchNextPage]);

  return { observerRef };
};
