import React, { FC, useCallback, useEffect } from 'react';
import { StatusBar, Text, View, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// project imports
import PageLayout from '../../layout/PageLayout';
import { APP_ROUTER } from '../../navigation/APP_ROUTER';
import { customColor, textColor } from '../../theme/Colors';
import style from './style';
import { HEIGHT } from '../../constant';
import commonStyles from '../../styles/commonStyles';
import IMAGES from '../../assets/images';
import GenerationSVG from '../../assets/icons/GenerationSVG';
import FilterSVG from '../../assets/icons/FilterSVG';
import SortSVG from '../../assets/icons/SortSVG';
import IconBtn from '../../components/IconBtn';
import TextInputComp from '../../components/TextInput';
import SearchSVG from '../../assets/icons/SearchSVG';
import Card from '../../components/Card';
import { productActions, productsSelectors } from '../../store/slices/productsSlice';
import store from '../../store';

const MainPage: FC<any> = () => {
  const [offset, setOffset] = React.useState<number>(0);

  const loadMoreData = () => {
    setOffset(prevState => prevState + 20);
  };

  const getData = useCallback(() => {
    store.dispatch(productActions.getAllPokemonAT('1'));
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageLayout>
      <StatusBar backgroundColor={textColor.white} barStyle={'dark-content'} />
      <ImageBackground
        resizeMode="contain"
        style={{ width: '100%', height: HEIGHT / 4 }}
        source={IMAGES.Pokeball_header}>
        <View style={commonStyles.container}>
          <View style={{ ...commonStyles.row, justifyContent: 'flex-end', marginVertical: 20 }}>
            <IconBtn>
              <GenerationSVG fill="#222" />
            </IconBtn>
            <IconBtn>
              <SortSVG fill="#222" />
            </IconBtn>
            <IconBtn>
              <FilterSVG fill="#222" />
            </IconBtn>
          </View>
          <Text style={commonStyles.heading}>Pokedex</Text>
          <Text style={commonStyles.subHeading}>
            Search for Pokémon by name or using the National Pokédex number.
          </Text>
          <View style={styles2.searchContainer}>
            <IconBtn>
              <SearchSVG fill={textColor.grey} />
            </IconBtn>
            <TextInputComp placeholder="Search Pokedex " />
          </View>
        </View>
      </ImageBackground>
      <View style={{ ...commonStyles.container, marginTop: 10 }}>
        <Maincomp />
      </View>
    </PageLayout>
  );
};

const Maincomp: FC<any> = ({}) => {
  const { data } = useSelector(productsSelectors.allPokemon);

  return (
    <React.Fragment>
      {data && (
        <FlatList
          contentContainerStyle={{ paddingBottom: 30 }}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <Card item={item} />}
          // onEndReached={loadMoreData}
        />
      )}
    </React.Fragment>
  );
};

export default MainPage;

const styles2 = StyleSheet.create({
  searchContainer: {
    ...commonStyles.row,
    marginVertical: 15,
    backgroundColor: customColor.input,
    borderRadius: 10,
    paddingLeft: 15,
  },
});
