import API from './constants';

interface IGetPokemonNamesData {
  name: string;
  url: string;
}

const { BASE_ENDPOINT, POKEMON_DETAILS_ENDPOINT, LIMIT } = API;

export const fetcher = (url: RequestInfo) =>
  fetch(url)
    .then(response => response.json())
    .catch(() => {
      // TODO: Crashlytics
    });

export const getPokemonNames = () =>
  fetcher(`${BASE_ENDPOINT}${POKEMON_DETAILS_ENDPOINT}?limit=${LIMIT}`);

export const getPokemonDetails = (name: string) =>
  fetcher(`${BASE_ENDPOINT}${POKEMON_DETAILS_ENDPOINT}/${name}`);

export const getPokemonRegion = async () => {
  const 
}

export const getPokemonList = async () => {
  const { results } = await getPokemonNames();

  if (!results) {
    return null;
  }

  return Promise.all(
    results.map(async ({ name, url }: IGetPokemonNamesData) => {
      const {
        sprites: {
          other: { home },
        },
        types,
        height,
      } = await fetcher(url);
      console.log({
        pokemonDetails: { image: home.front_default, types, height },
      });
      return {
        name,
        pokeImage: home.front_default,
        types,
      };
    }),
  );
};
