interface IImages {
  [index: string]: any;
}

const images: IImages = {
  signinBackground: require('./images/signin_background.jpeg'),
  pokeball: require('./images/pokeball.png'),
  appLogo: require('./images/app_logo.png'),
  kanto: require('./images/kanto_map.webp'),
  alola: require('./images/alola_map.png'),
  galar: require('./images/galar_map.png'),
  hoenn: require('./images/hoenn_map.png'),
  johto: require('./images/johto_map.png'),
  kalos: require('./images/kalos_map.png'),
  sinnoh: require('./images/sinnoh_map.png'),
  unova: require('./images/unova_map.png'),
  squirtleSilhouette: require('./images/squirtle_silhouette.png'),
  squirtle: require('./images/animated/squirtle.json'),
  mewtwo: require('./images/mewtwo.png'),
};

export default images;
