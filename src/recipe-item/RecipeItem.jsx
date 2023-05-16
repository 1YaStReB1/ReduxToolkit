import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/favorites/favorite.slice'

const RecipeItem = ({recipe}) => {
  const {favorites} = useSelector(state => state)

  const dispatch = useDispatch()


console.log(favorites)
  return (
    <div>
    {/* <img src="" alt="" /> */}
    <h2>{recipe.name}</h2>
    <button onClick={() => dispatch(actions.toggleFavorites(recipe))}>add to favorites</button>
    </div>
  )
}

export default RecipeItem