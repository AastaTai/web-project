// you may use this file if you wish to make API calls to the joke API
import { PUBLIC_JOKES_API_URL } from "$env/static/public";

const getJokes = async () => {
  const response = await fetch(`${PUBLIC_JOKES_API_URL}/random`);
  return await response.json();
};

export { getJokes };
