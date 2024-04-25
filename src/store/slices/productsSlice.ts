import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getAllPokemon, getPokemonByName, getPokemonEvolutionByID } from '../../services/productApi';

export interface Resource<T> {
  data: T | null | undefined;
  pending: boolean | null;
  err: string | null | undefined;
}

export function emptyResource<T>() {
  const resource: Resource<T> = {
    data: null,
    pending: null,
    err: null,
  };
  return resource;
}

interface IProduct {
  allPokemon: Resource<any>;
  pokemonByName: Resource<any>;
}

const initialState: IProduct = {
  allPokemon: emptyResource(),
  pokemonByName: emptyResource(),
};

const getAllPokemonAT = createAsyncThunk('product/all', async (load: string, thunkAPI) => {
  try {
    const response = await getAllPokemon(load);
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue('no product data');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getPokemonByNameAT = createAsyncThunk('product/byname', async (load: string, thunkAPI) => {
  try {
    const response = await getPokemonByName(load);
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue('no product data');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const getPokemonEvolutionAT = createAsyncThunk('product/evolution', async (load: string, thunkAPI) => {
  try {
    const response = await getPokemonEvolutionByID(load);
    if (response) {
      return response;
    } else {
      return thunkAPI.rejectWithValue('no product data');
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});


export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // charaterList start
    builder.addCase(getAllPokemonAT.pending, (state, _) => {
      state.allPokemon.pending = true;
      state.allPokemon.data = null;
      state.allPokemon.err = null;
    });
    builder.addCase(getAllPokemonAT.fulfilled, (state, action) => {
      state.allPokemon.data = action.payload;
      state.allPokemon.err = null;
      state.allPokemon.pending = false;
    });
    builder.addCase(getAllPokemonAT.rejected, (state, action) => {
      state.allPokemon.err = action?.error?.message;
      state.allPokemon.data = null;
      state.allPokemon.pending = false;
    });
    // charaterList end
    builder.addCase(getPokemonByNameAT.pending, (state, _) => {
      state.pokemonByName.pending = true;
      state.pokemonByName.data = null;
      state.pokemonByName.err = null;
    });
    builder.addCase(getPokemonByNameAT.fulfilled, (state, action) => {
      state.pokemonByName.data = action.payload;
      state.pokemonByName.err = null;
      state.pokemonByName.pending = false;
    });
    builder.addCase(getPokemonByNameAT.rejected, (state, action) => {
      state.pokemonByName.err = action?.error?.message;
      state.pokemonByName.data = null;
      state.pokemonByName.pending = false;
    });
    // EVOLUTION
    builder.addCase(getPokemonEvolutionAT.pending, (state, _) => {
      state.pokemonByName.pending = true;
      state.pokemonByName.data = null;
      state.pokemonByName.err = null;
    });
    builder.addCase(getPokemonEvolutionAT.fulfilled, (state, action) => {
      state.pokemonByName.data = action.payload;
      state.pokemonByName.err = null;
      state.pokemonByName.pending = false;
    });
    builder.addCase(getPokemonEvolutionAT.rejected, (state, action) => {
      state.pokemonByName.err = action?.error?.message;
      state.pokemonByName.data = null;
      state.pokemonByName.pending = false;
    });
  },
});

export const productActions = {
  getAllPokemonAT,
  getPokemonByNameAT
};

export const productsSelectors = {
  allPokemon: (state: any) => state.product.allPokemon,
  pokemonByName: (state: any) => state.product.pokemonByName,
};

export default productsSlice.reducer;
