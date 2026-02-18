import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loader,setLoader] = useState(false);

  async function getData(){
    try{
      setLoader(true);
      // alert("hi")
      const serverData=await fetch("http://localhost:4002/data")
      const jsonData=await serverData.json();
      setData(jsonData.msg.products);
    }catch(e){
      console.log(e)
    }finally{
      setLoader(false);
    }
  }
  function cartItem(ele){
     console.log(ele);
  }

  return (
    <>
      <h2>Fetching Data from node server</h2>
      {
        data.map((ele)=>(
          <div key={ele.id}
 style={{border:'2px solid red'}}>
            <h2>{ele.id}:{ele.title}</h2>
            <h3>{ele.description}</h3>
            <h3>{ele.price}</h3>
            <h3>{ele.rating}</h3>
            <button onClick={()=>cartItem(ele)}>Add to cart</button>
          </div>
        ))
      }
      <button onClick={getData}>Fetch Data</button>
      {
        loader?(<h2 style={{color:'brown',backgroundColor:'white'}}>Data is Fetching...</h2>) : ("")
      }
      {JSON.stringify(data)}
    </>
  )
}

export default App
