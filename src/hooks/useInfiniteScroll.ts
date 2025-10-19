import { useState, useEffect, useCallback } from 'react';

const ITEMS_PER_PAGE = 20;

export const useInfiniteScroll = <T>(allData: T[] | undefined) => {
  const [displayedData, setDisplayedData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = useCallback(() => {
    if (!allData || !hasMore) return;

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const newItems = allData.slice(startIndex, endIndex);

    if (newItems.length === 0) {
      setHasMore(false);
      return;
    }

    setDisplayedData((prev) => [...prev, ...newItems]);
    setCurrentPage((prev) => prev + 1);

    if (endIndex >= allData.length) {
      setHasMore(false);
    }
  }, [allData, currentPage, hasMore]);

  useEffect(() => {
    if (allData && displayedData.length === 0) {
      const initialItems = allData.slice(0, ITEMS_PER_PAGE);
      setDisplayedData(initialItems);

      if (allData.length <= ITEMS_PER_PAGE) {
        setHasMore(false);
      }
    }
  }, [allData, displayedData.length]);

  return {
    data: displayedData,
    hasMore,
    loadMore,
    totalItems: allData?.length || 0,
    loadedItems: displayedData.length,
  };
};
