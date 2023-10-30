import { useQuery } from "@tanstack/react-query";
import { Character } from "@/types";
import { get } from "../config";

export const getCharacterByUrl = async (url: string) => get<Character>(url);

export const characterByUrlQueryKey = (url: string) => ["characterByUrl", url];

export const useCharacterById = (url: string) => {
  return useQuery({
    queryKey: ["characterByUrl", url],
    queryFn: () => getCharacterByUrl(url),
  });
};
