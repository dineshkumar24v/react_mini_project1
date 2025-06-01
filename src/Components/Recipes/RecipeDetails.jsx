import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
const RecipeDetails = ({recipesDataToRecipieDetails}) => {
  console.log(recipesDataToRecipieDetails,'data')
  const idRecipe = useParams()   // useParams
  console.log(typeof idRecipe.id,'seeing type of params')
  // Matched Recipie using find method
  const MatchedRecipe = recipesDataToRecipieDetails.find((recipe)=>recipe.id === Number(idRecipe.id))  // matching id using find method
  console.log(MatchedRecipe,'mRecipe')
  const handleCartItems = (cartItemsChoosed)=>{  // handling cart items function
    let cartItemsFromLS = JSON.parse(localStorage.getItem('cartItems')) || []
    console.log(typeof cartItems, 'cartitems')
    cartItemsFromLS.push(cartItemsChoosed)
    localStorage.setItem('cartItems',JSON.stringify(cartItemsFromLS))
  }
  const handleFavItems = (favItemsChoosed)=>{   // handling favoruite items function
    let favItemsFromLS = JSON.parse(localStorage.getItem('favItems')) || []
    favItemsFromLS.push(favItemsChoosed)
    localStorage.setItem('favItems', JSON.stringify(favItemsFromLS))
  }
  return (   // rendering / displaying data on to the web page...
    <div id='matchedRecipieDetailsCont'>
      <div id='img'>
        <img src={MatchedRecipe.image}/>
      </div>
      <div>
        <h1>{MatchedRecipe.name}</h1>
        <p><b>Cusine:</b> {MatchedRecipe.cuisine}</p>
        <p><b>Ingredients:</b> {MatchedRecipe.ingredients}</p>
        <p><b>Rating:</b> {MatchedRecipe.rating}</p>
        <div style={{display:'flex', gap:'20px'}}>
        <Button variant="info" onClick={()=>handleCartItems(MatchedRecipe)}>Add to Cart</Button>  {/* add to CART button */}
        <Button variant="info" onClick={()=>handleFavItems(MatchedRecipe)}>Add to Favs</Button>   {/* add to FAVS button */}
        </div>
      </div>
    </div>
  )
}
export default RecipeDetails
