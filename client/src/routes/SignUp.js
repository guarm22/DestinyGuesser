import '../App.css';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import "../App.css"
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth';
import DGModal from '../components/dg-modal.component'
import { useContext, useState } from 'react';

function SignUp() {
    const [modalShown, setModalShown] = useState(false)
    const [password, setPassword] = useState("")        //controlled fields
    const [username, setUsername] = useState("")
    const [passwordVerify, setPasswordVerify] = useState("")
    const [email, setEmail] = useState("")

    const {auth} = useContext(AuthContext)
    const navigate = useNavigate();

    console.log(auth.user)

    const handleSignUp = () => {
        auth.registerUser({username:username, password:password, email:email, passwordVerify:passwordVerify})
    }

    const handleFieldChange = (event, type) => {
        switch(type) {
            case "username":
                setUsername(event.target.value)
                break;
            
            case "password":
                setPassword(event.target.value)
                break;

            case "passwordVerify":
                setPasswordVerify(event.target.value)
                break;

            case "email":
                setEmail(event.target.value);
                break;
            
            default:
                return;
        }
    }

    let modal = modalShown ? <DGModal message={"test"} onClose={() => setModalShown(false)}></DGModal> : null

    return (
        <Box sx={{display:"flex", alignItems:"center", flexDirection:"column", width:"100%"}}>
            <Typography sx={{color:"white", marginTop:5, fontSize:30}}>Sign up for DestinyGuesser</Typography>
            <Box className="sign-up" sx={{display:"flex", flexDirection:"column",width:"50%", alignItems:"center"}}>
                {modal}
                <TextField className="text-field" sx={{marginBottom:2}} onChange={(event) => handleFieldChange(event, "username") }
                label="Username"></TextField>

                <TextField className="text-field" sx={{marginBottom:2}} onChange={(event) => handleFieldChange(event, "email") }
                label="email"></TextField>

                <TextField className="text-field" type="password" sx={{marginBottom:2}} onChange={(event) => handleFieldChange(event, "password") }
                label="Password"></TextField>

                <TextField className="text-field" type="password" sx={{marginBottom:4}} onChange={(event) => handleFieldChange(event, "passwordVerify") }
                label="Password Verify"></TextField>

                <Button className="default-button" variant="contained" onClick={() => handleSignUp()}> Sign Up</Button>
            </Box>
        </Box>
    )

}

export default SignUp