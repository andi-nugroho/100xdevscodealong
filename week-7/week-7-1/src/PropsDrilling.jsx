import { useState } from "react"

function App(){
  const [count,setCount] = useState(0);
  return (
    <div>
      <CountRenderer count={count} setCount={setCount}/>
      {/* <Buttons count={count} setCount={setCount}/>  suppose i want this inside Count component
          // in that case i need to pass count and setCout as props in above count 
          // although it doesnt need setCout but it needed to passdown and get mentiponed
          // this make codes FUGLY and is known as props drilling
          -->soln is contextAPI */}
    </div>
  )
}

function CountRenderer({count,setCount}){
  return <div>
    <Buttons count={count} setCount={setCount}/>
    {count}
  </div>
}

function Buttons({count,setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count+1);
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1);
    }}>Decrease</button>
  </div>
}

export default App;