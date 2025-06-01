// import { useEffect, useState } from "react"
// import axios from 'axios'
import Recipe from './Recipe'
const Recipes = ({recipesData})=>{
  // const [recipes, setRecipes] = useState([])
  // useEffect(()=>{
  //   axios.get('https://dummyjson.com/recipes').then(res=>{
  //     console.log(res.data.recipes)
  //     setRecipes(res.data.recipes)
  //   })
  // },[])
  return(
    <div>
      <h1 style={{textAlign:'center',marginTop:'2rem'}}>Recipes</h1>
      <div id='allRecipeCont'>
        {recipesData.map((recipe)=>{
        return(
          <>
            <Recipe singleRecipie={recipe}/>
          </>
        )
        })}
      </div>
    </div>
  )
}
export default Recipes