import type { LANGUAGES } from '../../../constants/enums';

export type DummyResponse = {
  name: string;
  language: LANGUAGES;
  id: string;
  bio: string;
  version: number;
};

export type DummyListResponse = DummyResponse[];
