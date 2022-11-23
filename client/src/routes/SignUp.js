import '../App.css';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import "../App.css"
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth';
import DGModal from '../components/dg-modal.component'
import { useState } from 'react';

function SignUp() {

    const [modalShown, setModalShown] = useState(false)

    const handleSignUp = () => {
        setModalShown(true)
    }

    let modal = modalShown ? <DGModal message={"test"} onClose={() => setModalShown(false)}></DGModal> : null

    return (
        <Box>
            {modal}
            <TextField className="text-field"
            label="Username"></TextField>

            <TextField className="text-field"
            label="Password"></TextField>

            <TextField className="text-field"
            label="Password Verify"></TextField>

            <Button variant="contained" onClick={() => handleSignUp()}> Sign Up</Button>
        </Box>
    )

}

export default SignUp