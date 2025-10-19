import dayjs from 'dayjs';
import type { DummyListDto } from './dto/dummy.dto';
import type { DummyResponse } from './response/dummy.response';
import { STATES } from '../../constants/enums';

export const parseDummyResponseToDto = (
  response: DummyResponse
): DummyListDto => {
  return {
    key: response.id,
    id: response.id,
    name: response.name,
    language: response.language,
    version: response.version,
    bio: response.bio,
    state:
      Object.values(STATES)[
        Math.floor(Math.random() * Object.values(STATES).length)
      ],
    createdDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  };
};
