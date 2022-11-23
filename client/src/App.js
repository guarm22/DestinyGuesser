import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Banner from "./routes/Banner";
import SignUp from "./routes/SignUp";
import './App.css';
import { GlobalStoreContextProvider } from './store'
import { AuthContextProvider } from "./auth";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStoreContextProvider>  
          <Banner/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signUp" element={<SignUp/>}/>
            </Routes>
        </GlobalStoreContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
