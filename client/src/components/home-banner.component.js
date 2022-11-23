import '../App.css';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import "../App.css"
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth';
import DGModal from '../components/dg-modal.component'
import { useContext, useState } from 'react';

function HomeBanner() {

    return (
        <Box className="home-banner" sx={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            <Typography sx={{marginTop:0, fontSize:30}}>Welcome to DestinyGuesser</Typography>
        </Box>
    )

}

export default HomeBanner