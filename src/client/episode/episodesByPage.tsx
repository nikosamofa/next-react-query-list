import { Episode } from "@/types";
import { Response } from "../types";
import { get } from "../config";

export const getEpisodesByPageUrlInfinite = async ({ pageParam: url }: { pageParam: string }) =>
  get<Response<Episode>>(url);
