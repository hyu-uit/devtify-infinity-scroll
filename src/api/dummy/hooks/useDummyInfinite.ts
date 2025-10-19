import { useDummy } from './useDummy';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';

export const useDummyInfinite = () => {
  const { data: allData, isLoading, error } = useDummy();
  const { data, hasMore, loadMore, totalItems, loadedItems } =
    useInfiniteScroll(allData);

  return {
    data,
    isLoading,
    error,
    hasMore,
    loadMore,
    totalItems,
    loadedItems,
  };
};
