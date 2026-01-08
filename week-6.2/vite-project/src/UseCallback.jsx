import { memo, useCallback, useMemo, useState } from "react"

function App(){
  const [count,setCount] = useState(0);

  // function inputFun(){
  //   console.log("Hi!");
  // }

  const inputFun = useCallback(()=>{
    console.log("Hi!");
  },[]) // now this function wont change or redefined on each rerender so the component inside
  //      memo wont rerenedered on each render due to button setCount

  return <div>
    <ButtonComponent inputFunction={inputFun}/>
    <button onClick={()=>{setCount(count+1)}} >Counter ({count})</button>
  </div>
}
// even when the component ButtonComponent is wrapped inside memo this is getting re-renderd
// when clicking button of setCount because react is dumb it thiks the inputFun was redefined when 
// setCount rerenderd the APP
// soln -> wrap inputFun in useCallback -> used to memoise a funcition
const ButtonComponent = memo(({inputFun})=>{
  console.log("child rendered");
  return <div>
    <button> Button Clicked</button>
  </div>
})

export default App;