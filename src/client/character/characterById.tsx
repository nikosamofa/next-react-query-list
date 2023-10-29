import { useQuery } from "@tanstack/react-query";
import { Character } from "@/types";
import { BASE_URL, get } from "../config";

export const getCharacterById = async (id: number) => get<Character>(`${BASE_URL}character/${id}`);

export const characterByIdQueryKey = (id: number) => ["characterById", id];

export const useCharacterById = (id: number) => {
  return useQuery({
    queryKey: ["characterById", id],
    queryFn: () => getCharacterById(id),
  });
};
