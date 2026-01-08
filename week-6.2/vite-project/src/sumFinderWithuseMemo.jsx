import { useMemo, useState } from "react"

function App(){
  const [limit,setLimit]=useState(0);
  const [count,setCount] = useState(1);
  // function calculateSum(){
    // setCount(count+1);
    // const limit = document.getElementById("input").value;

    // usinf useMemo to prevent this expensive task to rerun on every rerendrer
    const sum = useMemo(()=>{
      console.log("this expensive funciton got called");
      let temp = 0;
      for(let i=1;i<=limit;i++){
        temp += i;
      }
      return temp;
    },[limit]) // now clilking on counter button rerender the App but this expensive operation runs
              //  only when the depedency array limit changes
  // }
  return <div>
    {/* <input id="input" onChange={calculateSum} /> */}
    <input onChange={(e)=>{setLimit(e.target.value)}} />
    <div>Sum from 1 to {limit} is {sum}</div>
    <button onClick={()=>{setCount(count+1)}} >Counter ({count})</button>
  </div>
}

export default App;