import type { LANGUAGES, STATES } from '../../../constants/enums';

export type DummyListDto = {
  key: string;
  id: string;
  name: string;
  language: LANGUAGES;
  bio: string;
  version: number;
  state: STATES;
  createdDate: string;
};

export type DummyListResponse = DummyListDto[];
