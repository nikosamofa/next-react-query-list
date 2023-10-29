import { charactersByPageQueryKey, getCharactersByPage, useCharactersByPage } from "@/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const CharactersPanel = () => {
  const query = useCharactersByPage();
  // console.log("characters", query.data);

  return <div>characters panel</div>;
};
