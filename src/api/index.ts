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

export const getPokemonRegionDetails = async () => {
  const { results } = await getPokemonRegions();

  if (!results) {
    return;
  }

  return Promise.all(
    results.map(async ({ name, url }: IGetPokemonData) => {
      const { locations, main_generation } = await fetcher(url);

      return {
        name,
        locations,
        regionPokemon: main_generation.url,
      };
    }),
  );
};

export const getPokemonByRegion = async (regionUrl: string) => {
  const { pokemon_species } = await fetcher(regionUrl);

  if (!pokemon_species) {
    return;
  }

  return Promise.all(
    pokemon_species.map(async ({ name, url }: IGetPokemonData) => {
      const {
        sprites: {
          other: { home },
        },
        types,
        height,
      } = await fetcher(url).then(({ varieties }) =>
        fetcher(varieties[0].pokemon?.url),
      );
      const pokemonTypes = types.map((value: any) => value.type.name);
      return {
        name,
        pokeImage: home.front_default,
        types: pokemonTypes,
        height,
      };
    }),
  );
};
