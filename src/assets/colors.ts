export const POKEMON_TYPES_COLORS = {
  normal: '#B5B5A9',
  grass: '#8BD44F',
  fire: '#F85442',
  water: '#55AEFE',
  fighting: '#A6523D',
  flying: '#7BA4FF',
  poison: '#9B5591',
  ground: '#E6C854',
  rock: '#CBB96F',
  bug: '#C3D21F',
  ghost: '#756FC5',
  electric: '#FFE439',
  psychic: '#EF62AB',
  ice: '#95F1FF',
  dragon: '#7C6CF7',
  dark: '#8B6653',
  steel: '#C3C1D7',
  fairy: '#FAADFF',
};

export const POKEMON_REGION_COLORS = {
  kanto: '#0022FF',
  johto: '#E5D914',
  hoenn: '#FE002A',
  sinnoh: '#4E4E4E',
  unova: '#FFFFFF',
  kalos: '#7500CA',
  alola: '#E07000',
  galar: '#006C06',
};

export default {
  leftBackgroundContainer: '#A2D995',
  centerBackgroundContainer: '#61D29F',
  rightBackgroundContainer: '#24CCA9',
  normalText: '#49696D',
  buttonText: '#FEFFFA',
  backgroundColor: '#FFFFFF',
  searchBackgroundColor: '#E7F3DF',
  fallback: '#000000',
  ...POKEMON_REGION_COLORS,
  ...POKEMON_TYPES_COLORS,
};
