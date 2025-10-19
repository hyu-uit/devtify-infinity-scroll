import { useQuery } from '@tanstack/react-query';
import { getDummyDataApi } from './dummy.api';

export const useDummy = () => {
  return useQuery({
    queryKey: ['dummy'],
    queryFn: getDummyDataApi,
    select: (data) => data,
  });
};
