export const COLORS: ICOLORS = {
  main: '#0085FF',
  mainBG: '#EDF8FB',
  background: '#ffff',
  white: '#fff',
  activeTab: '#0085FF',
  passiveTab: '#8F8F8F',
  btn: {
    add: '#0085FF',
  },
};

interface ICOLORS {
  main: string;
  mainBG: string;
  background: string;
  white: string;
  activeTab: string;
  passiveTab: string;
  btn: any;
}

type ColorsSection = {
  [key: string]: string;
};

const colors: ColorsSection = {
  bug: '#8CB230',
  dark: '#58575F',
  dragon: '#0F6AC0',
  electric: '#EED535',
  fairy: '#ED6EC7',
  fighting: '#D04164',
  fire: '#FD7D24',
  flying: '#748FC9',
  ghost: '#556AAE',
  grass: '#62B957',
  ground: '#DD7748',
  ice: '#61CEC0',
  normal: '#9DA0AA',
  poison: '#A552CC',
  psychic: '#EA5D60',
  rock: '#BAAB82',
  steel: '#417D9A',
  water: '#417D9A',
};

type BGColorsSection = {
  [key: string]: string;
};

const backgroundColors: BGColorsSection = {
  bug: '#8BD674',
  dark: '#6F6E78',
  dragon: '#7383B9',
  electric: '#F2CB55',
  fairy: '#EBA8C3',
  fighting: '#EB4971',
  fire: '#FFA756',
  flying: '#83A2E3',
  ghost: '#8571BE',
  grass: '#8BBE8A',
  ground: '#F78551',
  ice: '#91D8DF',
  normal: '#B5B9C4',
  poison: '#9F6E97',
  psychic: '#FF6568',
  rock: '#D4C294',
  steel: '#4C91B2',
  water: '#58ABF6',
};

const textColor = {
  white: '#FFF',
  black: '#17171B',
  grey: '#747476',
  number: 'rgba(23, 23, 27, 0.6)',
};

const customColor = {
  input: '#F2F2F2',
};

export { colors, backgroundColors, textColor, customColor };
