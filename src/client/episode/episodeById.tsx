import { useQuery } from "@tanstack/react-query";
import { Episode } from "@/types";
import { BASE_URL, get } from "../config";

export const getEpisodeById = async (id: number): Promise<Episode> =>
  get<Episode>(`${BASE_URL}episode/${id}`);

export const episodeByIdQueryKey = (id: number) => ["episodeById", id];

export const useEpisodeById = (id: number) => {
  return useQuery({
    queryKey: ["episodeById", id],
    queryFn: () => getEpisodeById(id),
  });
};
