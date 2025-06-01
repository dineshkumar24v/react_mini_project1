import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
const Favs = ()=>{
  const [favItems, setFavItems] =  useState([])
  useEffect(()=>{
    let favItemsFromLS = JSON.parse(localStorage.getItem('favItems'))
    setFavItems(favItemsFromLS)
  },[])
  console.log(favItems,'favitems')
  return(
    <div>
      <Table striped bordered hover style={{textAlign:'center'}}>
      <thead>
        <tr>
          <th>S.NO</th>
          <th>Dish Name</th>
          <th>Dish Image</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
      {favItems.map((items,index)=>{
        return(
          <>
          <tr>
          <td><p>{index+1}</p></td>
          <td><p>{items.name}</p></td>
          <td><img src={items.image} height={50}/></td>
          <td><p>{items.rating}</p></td>
        </tr>  
          </>
        )
      })}
      </tbody>
    </Table>
    </div>
  )
}
export default Favs


// You can prevent the same recipe from being added multiple times:
// In JavaScript, .some() is an array method used to check if at least one element in an array satisfies a given condition.


// const handleFavItems = (favItemsChoosed) => {
//   let favItemsFromLS = JSON.parse(localStorage.getItem('favItems')) || [];
//   const isAlreadyFav = favItemsFromLS.some(item => item.id === favItemsChoosed.id);
//   if (!isAlreadyFav) {
//     favItemsFromLS.push(favItemsChoosed);
//     localStorage.setItem('favItems', JSON.stringify(favItemsFromLS));
//   }
// };


