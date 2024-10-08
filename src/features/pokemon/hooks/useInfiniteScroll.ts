import { useEffect, useRef } from "react";

export const useInfiniteScroll = (fetchNextPage: () => void, hasNextPage: boolean) => {
  const listRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (
      listRef.current &&
      window.innerHeight + window.scrollY >= listRef.current.offsetHeight &&
      hasNextPage
    ) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);

  return { listRef };
};
