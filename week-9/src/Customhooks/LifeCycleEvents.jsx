import React, { useEffect, useState } from 'react';

function App(){
  const [render,setRender] = useState(true);
  useEffect(()=>{
    setInterval(()=>{
      setRender(r => !r);
    },5000)
  },[])
  return <>
    {render ? <MyComponent/> : <div></div>}
  </>
}
function MyComponent() {
  useEffect(()=>{
    console.error("component mounted"); // this get executed when component mounts for the first time in case of setInterval ever n sec
    return ()=>{
      console.log("Component unmounted"); //this function executes when component get unmounted
     }
  },[]);
   

  return (
    <div>
      from inside my component
    </div>
  );
}

export default App;