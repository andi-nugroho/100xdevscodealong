
function App() {

    return (
      <>
      <div style={{display: "flex",justifyContent: "space-around"}}>
        <div style={{backgroundColor: "red"}}>Hello.....</div>
        <div style={{backgroundColor: "green"}}>Hello.....</div>
        <div style={{backgroundColor: "blue"}}>Hello.....</div>
      </div>
  
      <div className="flex justify-around">
        <div className="bg-red-500">Hello.....</div>
        <div className="bg-green-500">Hello.....</div>
        <div className="bg-blue-500">Hello.....</div>
      </div>
  
      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-5">Hello.....</div>
        <div className="bg-green-500 col-span-4">Hello.....</div>
        <div className="bg-blue-500 col-span-1">Hello.....</div>
      </div>
      <br></br>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-red-500">Hello.....</div>
        <div className="bg-green-500">Hello.....</div>
        <div className="bg-blue-500">Hello.....</div>
      </div>
      </>
    )
  }
  
  export default App
  