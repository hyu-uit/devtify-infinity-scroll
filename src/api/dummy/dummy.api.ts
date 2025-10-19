import { api } from '../apiClient';
import type { DummyListResponse } from './response/dummy.response';

export const getDummyDataApi = async () => {
  const response = await api.get<DummyListResponse>('json-dummy-data/5MB.json');
  return response.data;
};
