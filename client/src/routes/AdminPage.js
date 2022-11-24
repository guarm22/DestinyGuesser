import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import "../App.css"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import AuthContext from '../auth';
import HomeBanner from '../components/home-banner.component';
import LocationCreator from '../components/location-creator';
import TriviaQuestionCreator from '../components/trivia-question-creator.component';

function AdminPage() {
    const navigate = useNavigate();
    const { store } = useContext(GlobalStoreContext)
    const {auth} = useContext(AuthContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [loggedIn, setLoggedIn] = useState(false);
    const [selection, setSelection] = useState("")

    const handleFieldChange = (event, type) => {
        switch(type) {
            case "u":
                setUsername(event.target.value)

            case "p":
                setPassword(event.target.value)
        }
    }

    const handleLogin = () => {
        if(username == process.env.REACT_APP_ADMIN_USERNAME && password == process.env.REACT_APP_ADMIN_PASSWORD) {
            setLoggedIn(true)
        }
    }

    let topText = !loggedIn ? <Typography sx={{fontSize:"24px"}}>Enter admin info:</Typography> : null

    let main = !loggedIn ? 
    <Box sx={{display:"flex", flexDirection:"column", height:"100%", width:"50%", marginTop:"2%", paddingLeft:"25%"}}>
        <TextField className="text-field" label="username" sx={{marginBottom:2}} onChange={(event) => handleFieldChange(event, "u")}></TextField>
        <TextField className="text-field" label="password" onChange={(event) => handleFieldChange(event, "p")}></TextField>
        <Button variant="contained" sx={{width:"50%", marginTop:3}} onClick={() => handleLogin()}>Submit</Button>
    </Box>
    :
    selection == "" ?

    <Box sx={{display:"flex", flexDirection:"column", height:"100%", width:"25%", marginTop:"2%", paddingLeft:"0%"}}>
        <Button variant="contained" sx={{marginTop:3}} onClick = {() => setSelection("location")}>Create new locations</Button>
        <Button variant="contained" sx={{marginTop:3}} onClick = {() => setSelection("trivia")}>Create new trivia questions</Button>
    </Box> 
    : 
    <Button variant="contained" onClick={() => setSelection("")}>Back</Button>

    let locationCreator = selection =="location" ? <LocationCreator></LocationCreator> : null
    let triviaQuestionCreator = selection == "trivia" ? <TriviaQuestionCreator></TriviaQuestionCreator> : null
    

    return (
      <Box className="Home">
        {topText}
        {main}
        {locationCreator}
        {triviaQuestionCreator}
      </Box>
    );
  }
  
  export default AdminPage;