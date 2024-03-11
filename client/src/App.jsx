import Home from "./pages/homepage/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user?<Home/>:<Navigate to ="register"/>}/>
        <Route exact path="/register" element={!user?<Register/>:<Navigate to ="/"/>}/>
        <Route exact path="/login" element={!user?<Login/>:<Navigate to ="/"/>}/>
        {
          user&&(
            <>
              <Route path="/movies" element={<Home type="movie"/>}/>
              <Route path="/series" element={<Home type="series"/>}/>
              <Route path="/new" element={<Home type ="new"/>}/>
              <Route path="/watch" element={<Watch/>}/>

            </>
          )
        }
        
      </Routes>
    </Router>
  );
}

export default App;