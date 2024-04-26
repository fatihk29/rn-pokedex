import axiosClient, { QUERY } from './api';

const endPoints = {
  characters: 'characters',
  characterId: 'characters',
  comics: 'comics',
  comicId: 'comics',
};

export const getAllPokemon = async (offset: string): Promise<any> => {
  console.log('getCharaterList offset :>> ', offset);
  try {
    const response = await axiosClient.get(
      `pokemon?limit=7&offset=${offset}`,
    );
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPokemonByName = async (name: string): Promise<any> => {
  try {
    const response = await axiosClient.get(
      `pokemon/${name}`,
    );
    // console.log('response', response.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPokemonEvolutionByID = async (id: string): Promise<any> => {
  console.log('name :>> ', id);
  try {
    const response = await axiosClient.get(
      `evolution-chain/${id}`,
    );
    // console.log('response', response.data)
    if (response?.data) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response?.data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};


