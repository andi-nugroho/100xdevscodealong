// context API

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App(){

  return (
    <div>
        <RecoilRoot>
        <Count/>
        </RecoilRoot>
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
    <Even/>
  </div>
}
function CountRenderer(){
  const count = useRecoilValue(countAtom);
  // const [count,setCount] = useRecoilState(countAtom);

  return <div>
    {count}
  </div>
}
function Buttons(){
  // const [count,setCount] = useRecoilState(countAtom); //cause un-necessary buttons re-rendering
  console.log("button re-renderd");
  const setCount = useSetRecoilState(countAtom); // no button un-necessary re-renders but need to write setCount
  // funtion in special way i.e setCount(count => count+1 );

  return <div>
    <button onClick={()=>{
      setCount(count => count+1 );
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count => count-1 );
    }}>Decrease</button>
  </div>
}
function Even(){
  // const count = useRecoilValue(countAtom);
  // if(count%2===0){
  const isEven = useRecoilValue(evenSelector);
    return <div>
      {isEven ? "It is Even" : null}
    </div>
}

export default App;