import API from './constants';

interface IGetPokemonData {
  name: string;
  url: string;
}

const { BASE_ENDPOINT, POKEMON_DETAILS_ENDPOINT, POKEMON_REGIONS, LIMIT } = API;

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

export const getPokemonRegions = async () =>
  fetcher(`${BASE_ENDPOINT}${POKEMON_REGIONS}`);

export const getPokemonByRegion = async () => {
  const { results } = await getPokemonRegions();

  if (!results) {
    return;
  }

  return Promise.all(
    results.map(async ({ name, url }: IGetPokemonData) => {
      const { main_generation } = await fetcher(url);
      const { pokemon_species } = await fetcher(main_generation.url);
      return {
        regionName: name,
        pokemonList: pokemon_species,
      };
    }),
  );
};

export const getPokemonList = async () => {
  const { regionName, pokemonList } = await getPokemonByRegion();

  if (!pokemonList) {
    return;
  }

  return Promise.all(
    pokemonList.map(async ({ name, url }: IGetPokemonData) => {
      const {
        sprites: {
          other: { home },
        },
        types,
        height,
      } = await fetcher(url);

      return {
        regionName,
        name,
        pokeImage: home.front_default,
        types,
        height,
      };
    }),
  );
};
