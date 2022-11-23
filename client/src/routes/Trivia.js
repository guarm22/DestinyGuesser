import '../App.css';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import "../App.css"
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth';
import DGModal from '../components/dg-modal.component'
import { useContext, useState } from 'react';

function Trivia() {
    const {auth} = useContext(AuthContext)

    const [showModal, setShowModal] = useState(false);

    const handleGuess = (event, value) => {
        setShowModal(true)
    }

    let modal = showModal ? <DGModal message="correct!" onClose={() => setShowModal(false)}></DGModal> : null

    return (
        <Box sx={{display:"flex", alignItems:"center", flexDirection:"column", width:"100%", color:"white"}}>
            <Typography sx={{marginTop:1, fontSize:30}}>Destiny Trivia</Typography>
            <Box className="trivia-holder" sx={{display:"flex", flexDirection:"column",width:"50%", alignItems:"center"}}>
                <Typography sx={{fontSize:"24px"}}>What is destiny 2?</Typography>
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

export default Trivia