import { useQuery } from "@tanstack/react-query";
import { Episode } from "@/types";
import { Response } from "../types";
import { BASE_URL, get } from "../config";

export const getEpisodesByPage = async (page = 1, url?: string) =>
  get<Response<Episode>>(url ?? `${BASE_URL}episode?page=${page}`);

export const getEpisodesByPageInfinite = async ({ pageParam: url }: { pageParam: string }) =>
  get<Response<Episode>>(url);

export const episodesByPageQueryKey = (page = 1) => ["episodesBypage", page];

export const useEpisodesByPage = (page = 1) => {
  return useQuery({
    queryKey: episodesByPageQueryKey(page),
    queryFn: () => getEpisodesByPage(page),
  });
};
