export const BASE_URL = "https://rickandmortyapi.com/api/";

export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}, ${response.statusText}`);
  }

  return await response.json();
};
