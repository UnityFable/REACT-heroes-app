import { heroApi } from '../api/hero.api';
import type { HeroesSummaryResponse } from '../interfaces/heroes-summary.response';

export const getHeroesSummaryAction = async (): Promise<HeroesSummaryResponse> => {
  const { data } = await heroApi.get<HeroesSummaryResponse>('/summary');

  return data;
};