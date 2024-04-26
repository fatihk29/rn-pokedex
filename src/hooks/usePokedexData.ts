import { concat } from 'lodash'
import { useEffect, useState } from 'react'
import store from '../store'
import { productActions } from '../store/slices/productsSlice'


export const usePokedexData = () => {
  const [offset, setOffset] = useState<number>(0)

  const loadMoreData = () => {
    setOffset(prevState => prevState + 20)
  }

  const data = store.dispatch(productActions.getAllPokemonAT('3'));
  console.log('data', data)


  const [currentData, setCurrentData] = useState<any>([])

  // useEffect(() => {
  //   if (data) {
  //     setCurrentData((prevData: any) => concat(prevData, data))
  //   }
  // }, [data])

  return {
    currentData,

    loadMoreData,
  }
}