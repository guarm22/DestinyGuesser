import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import "../App.css"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import AuthContext from '../auth';
import HomeBanner from '../components/home-banner.component';

function Home() {
    const navigate = useNavigate();
    const { store } = useContext(GlobalStoreContext);
    const {auth} = useContext(AuthContext)

    const [test, setTest] = useState("");

    return (
      <Box className="Home">
        <HomeBanner></HomeBanner>
        <Typography sx={{fontSize:"24px"}}>Game Selection:</Typography>
        <Box sx={{display:"flex", flexDirection:"column", height:"100%", marginTop:"2%"}}>
          <Button variant="contained" onClick={() => navigate("/locationGuesser", {})}>Location Guesser</Button>
          <Button variant="contained" sx={{marginTop:5}} onClick={() => navigate("/trivia", {})}>Trivia</Button>
          <Button onClick={() => getQuestion()}>Get Question</Button>
          <p>{store.currentTriviaQuestion.question}</p>
        </Box>
      </Box>
    );

    function getQuestion() {
      store.getTriviaQuestion();
      setTest(store.currentTriviaQuestion);
      console.log(store.currentTriviaQuestion);
    }
  }
  
  export default Home;