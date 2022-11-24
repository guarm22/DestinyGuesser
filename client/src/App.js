import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Banner from "./components/Banner";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
import './App.css';
import { GlobalStoreContextProvider } from './store'
import { AuthContextProvider } from "./auth";
import Trivia from "./routes/Trivia";
import LocationGuesser from "./routes/LocationGuesser";
import AdminPage from "./routes/AdminPage";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStoreContextProvider>  
          <Banner/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signUp" element={<SignUp/>}/>
              <Route path="/login" element={<SignIn/>}/>
              <Route path="/trivia" element={<Trivia/>}/>
              <Route path="/locationGuesser" element={<LocationGuesser/>}/>
              <Route path="/adminPage" element={<AdminPage></AdminPage>}/>
            </Routes>
        </GlobalStoreContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
