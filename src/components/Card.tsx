import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

// project imports
import commonStyles from '../styles/commonStyles';
import IMAGES from '../assets/images';
import { WIDTH } from '../constant';
import { backgroundColors } from '../theme/Colors';
import Tag from './Tag';

const Card: React.FC<any> = ({ item }) => {
  let type: string = 'grass';
  if (item > 3) {
    type = 'fire';
  }

  return (
    <View style={{ ...styles.card, backgroundColor: backgroundColors[type] }}>
      <View style={{ padding: 15, paddingRight: 0, width: WIDTH / 1.8 }}>
        <View style={{ position: 'absolute', right: 0, top: 5 }}>
          <Image source={IMAGES.Dots_card} style={{ width: 100, height: 40 }} />
        </View>
        <Text style={commonStyles.number}>#0001</Text>
        <Text style={commonStyles.title}>Bulbasaur</Text>
        <View style={commonStyles.row}>
          <Tag type={type} />
          <Tag type="poison" />
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
              uri: `https://pokeres.bastionbot.org/images/pokemon/${1}.png`,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

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
