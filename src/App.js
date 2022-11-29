import logo from "./logo.svg";
import "./style.scss";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/AuthContext";
import PrivateRouter from "./router/PrivateRouter";

function App() {
  const {currentUser}= useContext(Context)
  console.log(currentUser);
  return (
   <BrowserRouter>
   <Routes>
    <Route path="" element={<PrivateRouter/>}>
    <Route path="/" element={<Home/>}/>
    </Route>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
