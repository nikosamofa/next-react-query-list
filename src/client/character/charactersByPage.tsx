import { useQuery } from "@tanstack/react-query";
import { Character } from "@/types";
import { Response } from "../types";
import { BASE_URL, get } from "../config";

export const getCharactersByPage = async (page = 1, url?: string) =>
  get<Response<Character>>(url ?? `${BASE_URL}character?page=${page}`);

export const charactersByPageQueryKey = (page = 1) => ["charactersBypage", page];

export const useCharactersByPage = (page = 1) => {
  return useQuery({
    queryKey: charactersByPageQueryKey(page),
    queryFn: () => getCharactersByPage(page),
  });
};
