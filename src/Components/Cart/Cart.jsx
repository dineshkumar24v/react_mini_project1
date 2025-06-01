import Table from 'react-bootstrap/Table';
const Cart = ()=>{
  const getCartItems = JSON.parse(localStorage.getItem('cartItems'))
  console.log(getCartItems)
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
      {getCartItems.map((items,index)=>{
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
export default Cart


// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   // Load cart items on component mount
//   useEffect(() => {
//     const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(storedItems);
//   }, []);

//   // 🧹 Remove a single item
//   const handleRemoveItem = (indexToRemove) => {
//     const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
//     setCartItems(updatedCart);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//   };

//   // 🗑 Clear all items
//   const handleClearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem('cartItems'); // or set to empty array
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       {cartItems.length === 0 ? (
//         <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
//       ) : (
//         <>
//           <Button variant="danger" onClick={handleClearCart} style={{ marginBottom: '15px' }}>
//             Clear Cart
//           </Button>

//           <Table striped bordered hover style={{ textAlign: 'center' }}>
//             <thead>
//               <tr>
//                 <th>S.NO</th>
//                 <th>Dish Name</th>
//                 <th>Dish Image</th>
//                 <th>Rating</th>
//                 <th>Remove</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cartItems.map((item, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{item.name}</td>
//                   <td><img src={item.image} height={50} alt={item.name} /></td>
//                   <td>{item.rating}</td>
//                   <td>
//                     <Button variant="outline-danger" onClick={() => handleRemoveItem(index)}>
//                       Remove
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
