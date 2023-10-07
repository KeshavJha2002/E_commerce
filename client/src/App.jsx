import HomePage from "./pages/HomePage"
import { Routes,Route,useNavigate } from "react-router-dom"

const App = () => {
  const navigate = useNavigate();

  const handleTarget = (newTarget) =>{
    navigate(`/${newTarget}`);
  }

  return (
      <Routes>
        <Route path="/" element={<HomePage handleTarget={handleTarget}/>}/>
        <Route path="/mens" element={<>Hi</>}/>
        <Route path="/womens" element={<>Hi</>}/>
        <Route path="/jackets" element={<>Hi</>}/>
        <Route path="/hats" element={<>Hi</>}/>
        <Route path="/sneakers" element={<>Hi</>}/>
      </Routes>
  )
}

export default App
