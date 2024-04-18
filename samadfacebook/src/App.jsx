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
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" />  : <Register />} /> 
        <Route path="/profile/:username" exact element={<Profile userInfo={user} /> } />     
      </Routes>
    </BrowserRouter>
  )
}

export default App;
