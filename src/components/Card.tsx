import React, { memo } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

// project imports
import commonStyles from '../styles/commonStyles';
import IMAGES from '../assets/images';
import { WIDTH } from '../constant';
import { backgroundColors } from '../theme/Colors';
import Tag from './Tag';
import store from '../store';
import { productActions, productsSelectors } from '../store/slices/productsSlice';
import { useSelector } from 'react-redux';

const Card: React.FC<any> = memo(({ item }) => {
  let type: string = 'grass';
  if (item > 3) {
    type = 'fire';
  }

  const g = React.useCallback(() => {
    store.dispatch(productActions.getPokemonByNameAT(item.name));
  }, []);

  React.useEffect(() => {
    if (item.name) {
      g();
    }
  }, [item?.name]);

  const d = useSelector(productsSelectors.pokemonByName);
  console.log('d.length', Object.keys(d.data));

  // console.log(item.name, d?.data?.[item.name]?.types);

  const id = item.url.substring(34).replace('/', '');

  return (
    <View style={{ ...styles.card, backgroundColor: backgroundColors[type] }}>
      <View style={{ padding: 15, paddingRight: 0, width: WIDTH / 1.8 }}>
        <View style={{ position: 'absolute', right: 0, top: 5 }}>
          <Image source={IMAGES.Dots_card} style={{ width: 100, height: 40 }} />
        </View>
        <Text style={commonStyles.number}>#{id}</Text>
        <Text style={commonStyles.title}>{item.name.toUpperCase()}</Text>
        <View style={commonStyles.row}>
          {d.data?.[item.name]?.types?.map((a: any) => {
            return <Tag type={a.type.name} />;
          })}
        </View>
      </View>
      <ImageBackground
        resizeMode="contain"
        source={IMAGES.Pokeball_card}
        style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
});

export default Card;

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginTop: -10,
    marginLeft: -10,
  },
  imageBackground: {
    width: 100,
    height: 100,
    paddingRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});
