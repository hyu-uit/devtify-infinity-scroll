import { useQuery } from '@tanstack/react-query';
import { getDummyDataApi } from '../dummy.api';
import API_KEYS from '../../../constants/api-keys.constant';
import { parseDummyResponseToDto } from '../dummy.services';

export const useDummy = () => {
  return useQuery({
    queryKey: API_KEYS.DUMMY_KEYS.lists(),
    queryFn: getDummyDataApi,
    select: (data) => data.map(parseDummyResponseToDto),
  });
};
