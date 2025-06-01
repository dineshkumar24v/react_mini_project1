import { useEffect,useState } from 'react'
import Navbarr from './Components/Navbar/Navbarr'
import { Routes, Route } from 'react-router-dom'
import Recipes from './Components/Recipes/Recipes'
import Cart from './Components/Cart/Cart'
import Favs from './Components/Fav/Fav'
import NotFound from './Components/NotFound'
import Home from './Components/Home/Home'
import RecipeDetails from './Components/Recipes/RecipeDetails' 
import axios from 'axios'
const App =()=>{
  const [recipes, setRecipes] = useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/recipes').then(res=>{
      console.log(res.data.recipes)
      setRecipes(res.data.recipes)
    })
  },[])
  return(
    <div>
      <Navbarr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipes recipesData={recipes}/>}/>
        <Route path='/recipes/:id' element={<RecipeDetails recipesDataToRecipieDetails={recipes}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}
export default App


// requirement  ( wireframes ) --> an image or set of images which displays the functional elements of a website or page, typically used for planning a site's structure and functionality.
// requirements dependencies ( packages ) install
// folders , files, comps creation 
// flow of the task / project
// achieving step by step