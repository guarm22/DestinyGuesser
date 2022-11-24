import '../App.css';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import "../App.css"
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth';
import DGModal from '../components/dg-modal.component'
import { useContext, useState } from 'react';

function TriviaQuestionCreator() {
    const {auth} = useContext(AuthContext)

    let question = <TextField className="text-field" label="question"></TextField>

    return (
        <Box sx={{display:"flex", alignItems:"center", flexDirection:"column", width:"100%", color:"white"}}>
            <Typography sx={{marginTop:1, fontSize:30}}>Trivia Question Creator</Typography>
            <Box className="image-holder" sx={{display:"flex", flexDirection:"column",width:"70%", height:"70%", alignItems:"center"}}>
                {question}
            </Box>

            <Box sx={{display:"flex", justifyContent:"space-between", width:"60%", paddingTop:2}}>

                <TextField className="text-field" label="correct answer" sx={{marginRight:1}}></TextField>
                <TextField className="text-field" label="incorrect answer" sx={{marginRight:1}}></TextField>
                <TextField className="text-field" label="incorrect answer" sx={{marginRight:1}}></TextField>
                <TextField className="text-field" label="incorrect answer" sx={{marginRight:1}}></TextField>
            </Box>
        </Box>
    )

}

export default TriviaQuestionCreator