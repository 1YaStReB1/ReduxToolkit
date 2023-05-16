
import RecipeItem from './recipe-item/RecipeItem'

function App() {

  return (
    <div>
      <RecipeItem recipe={{
        id: 1,
        name: 'Лазанья'
      }}/>
      <RecipeItem recipe={{
        id: 2,
        name: 'Lapha'
      }}/>
      <RecipeItem recipe={{
        id: 3,
        name: 'Grecha'
      }}/>
    </div>
  )
}

export default App
