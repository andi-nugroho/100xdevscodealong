import React, { useState } from "react"

function App() {
  const [random,setRandom] = useState(0);

  return (
      <div>
      <button onClick={()=>{ //eihter just give the name of funcution and define it above or define using an arrow function
        setRandom(Math.random())
      }}> click me to change the title</button>
        <Header title={random}/>
        {/* <HeaderWithButton/> */}
        <Header title="Harkirat"/>
        <Header title="Harkirat"/>
        <Header title="Harkirat"/>
        <Header title="Harkirat"/>
      </div>
  )
}
// function HeaderWithButton(props){
//   const [random,setRandom] = useState(0);
//   return (
//     <>
//     <button onClick={()=>{
//       setRandom(Math.random())
//     }}>Click here to change title</button>
//     <Header title={random}/>
//     </>
//   )
// }
// function Header(props){
//   return(
//     <div>
//       My name is {props.title}
//     </div>
//   )
// }


// uisng react.memo to memoise the above function to avoid reredners when its props are unchanged
const Header = React.memo((props)=>{
  return(
    <div>
      My Name is {props.title}
    </div>
  )
})
export default App
