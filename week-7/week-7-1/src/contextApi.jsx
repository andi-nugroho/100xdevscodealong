// context API


import { useContext, useState } from "react"
import { CountContext } from "./context";

function App(){
  const [count,setCount] = useState(0);
  // wrap anyone that wants to use the teleported value inside a provide
  return (
    <div>
      <CountContext.Provider value={[count,setCount]}>
        <Count/> {/* No need to pass count or setCount as props here */}
      </CountContext.Provider>
    </div>
  )
}

function Count(){
  // although this doesnt contaions or uses any stated props but 
  // it still re-renders so the soln is better state management
  console.log("count re-rendered"); 
  return <div>
    <CountRenderer/>
    <Buttons/>
  </div>
}
function CountRenderer(){
  const [count] = useContext(CountContext);

  return <div>
    {count}
  </div>
}
function Buttons(){
  const [count,setCount] = useContext(CountContext);

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