import { Suspense, lazy } from 'react';
import { Routes,Route, BrowserRouter, useNavigate} from 'react-router-dom'
const Dashboard = lazy(()=>import("./components/Dashboard"))
const Landing = lazy(()=>import("./components/Landing"))


function App() {


  return (
    <div>
    <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback="loading ....">
          <Dashboard/>
          </Suspense>}/>
        <Route path="/" element={<Suspense fallback="loarding..."><Landing/></Suspense>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={()=>{
      // window.location.href = "/dashboard" //not a good way for client side routing as it reload the page and do a network call
      navigate('/dashboard');
    }}>Dashboard</button>

    <button onClick={()=>{
      navigate("/");
      // window.location.href = "/"
    }}>Landing</button>
  </div>
}

export default App
