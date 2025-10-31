import { useState } from 'react'
import './Book.css'
const Book = ({book}) => {
  const [count,setCount]=useState(0);
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    if(count>0)
    setCount(count-1);
  }
  function handleAddtoCart(){
    alert(`${book.title} Book Added Successfully`)
  }
  return (
    <div className='card'>
      <img src={book.image} alt="" width={200} height={200} />
      <h3>Title: {book.title}</h3>
      <h4>Price: ₹{book.price}/-</h4>
      <div>
        <button onClick={decrement} style={{width:"25px",height:"25px"}}>-</button>
        <span>{count}</span>
        <button onClick={increment} style={{width:"25px",height:"25px"}}>+</button>
      </div>
      <button onClick={handleAddtoCart}>Add To Cart</button>
    </div>
  )
}

export default Book