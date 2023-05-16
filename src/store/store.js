import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { reducer as favoriteReduser } from './favorites/favorite.slice'

const reducers = combineReducers({
    favorites: favoriteReduser,
})

export const store = configureStore({
    reducer: reducers,

})