import '../App.css';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import "../App.css"
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth';
import { useContext, useState } from 'react';
import DGModal from '../components/dg-modal.component';

function LocationGuesser() {
    const [answer, setAnswer] = useState("")
    const [question, setQuestion] = useState("")
    const [showModal, setShowModal] = useState(false);

    const handleGuess = (event, value) => {
        setShowModal(true)
    }

    let modal = showModal ? <DGModal message="correct!" onClose={() => setShowModal(false)}></DGModal> : null

    return (
        <Box sx={{display:"flex", alignItems:"center", flexDirection:"column", width:"100%", height:"90%", position:"absolute", color:"white"}}>
            {modal}
            <Typography sx={{marginTop:1, fontSize:24}}>Location Guesser</Typography>

            <Box className="game-info">
                <Typography sx={{paddingRight:"10%", fontSize:24}}>Score:0</Typography>
                <Typography sx={{fontSize:24}}>Lives:3</Typography>
            </Box>

            <Box className="image-holder" sx={{display:"flex", flexDirection:"column",width:"70%", height:"70%", alignItems:"center"}}>
                <img className="game-image" src="https://media.wired.com/photos/5cf991a2253bc5defe7abfbc/16:9/w_1487,h_836,c_limit/Culture_Replay_Destiny2.jpg"></img>
            </Box>

            <Box sx={{display:"flex", justifyContent:"space-between", width:"40%", paddingTop:2}}>

                <Button variant="contained" onClick={(event) => handleGuess(event, "1")}>Guess 1</Button>
                <Button variant="contained" onClick={(event) => handleGuess(event, "2")}>Guess 2</Button>
                <Button variant="contained" onClick={(event) => handleGuess(event, "3")}>Guess 3</Button>
                <Button variant="contained" onClick={(event) => handleGuess(event, "4")}>Guess 4</Button>
            </Box>
        </Box>
    )

}

export default LocationGuesser