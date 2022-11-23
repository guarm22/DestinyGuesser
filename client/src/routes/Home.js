import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import "../App.css"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import AuthContext from '../auth';

function Home() {
    const navigate = useNavigate();
    const { store } = useContext(GlobalStoreContext)
    const {auth} = useContext(AuthContext)

    return (
      <Box className="Home">
        <Button variant="contained" onClick={() => navigate("/locationGuesser", {})}>Location Guesser</Button>
        <Button variant="contained" sx={{marginTop:5}} onClick={() => navigate("/trivia", {})}>Trivia</Button>
      </Box>
    );
  }
  
  export default Home;