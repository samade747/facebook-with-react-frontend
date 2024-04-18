import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  
  const {user} = useContext(AuthContext)

  return (
    <BrowserRouter> // 
      <Routes>
        <Route path="/" exact element={user ? <Home /> : <Register />} />
        



      </Routes>
    </BrowserRouter>
  )
}

export default App;
