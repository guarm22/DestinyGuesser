import '../App.css';
import Box from '@mui/material/Box';
import { Button, TextField, Typography } from '@mui/material';
import "../App.css"
import { useNavigate } from 'react-router-dom';
import AuthContext from '../auth';
import DGModal from '../components/dg-modal.component'
import { useContext, useState } from 'react';
import GlobalStoreContext from '../store';

function TriviaQuestionCreator() {
    const {auth} = useContext(AuthContext);
    const {store} = useContext(GlobalStoreContext);

    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");

    const [isErrorModalOpen, setErrorModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("noob");

    let questionField = <TextField className="text-field" label="question" onChange={(event) => setQuestion(event.target.value)} value={question}></TextField>

    let errorModal = isErrorModalOpen ? <DGModal message={errorMessage} onClose={() => setErrorModalOpen(false)}></DGModal> : null;

    return (
        <Box sx={{display:"flex", alignItems:"center", flexDirection:"column", width:"100%", color:"white"}}>
            
            {errorModal}

            <Typography sx={{marginTop:1, fontSize:30}}>Trivia Question Creator</Typography>
            <Box className="image-holder" sx={{display:"flex", flexDirection:"column",width:"70%", height:"70%", alignItems:"center"}}>
                {questionField}
            </Box>

            <Box sx={{display:"flex", justifyContent:"space-between", width:"60%", paddingTop:2}}>

                <TextField className="text-field" label="correct answer" sx={{marginRight:1}} onChange={(event) => setAnswer1(event.target.value)} value={answer1}></TextField>
                <TextField className="text-field" label="incorrect answer" sx={{marginRight:1}} onChange={(event) => setAnswer2(event.target.value)} value={answer2}></TextField>
                <TextField className="text-field" label="incorrect answer" sx={{marginRight:1}} onChange={(event) => setAnswer3(event.target.value)} value={answer3}></TextField>
                <TextField className="text-field" label="incorrect answer" sx={{marginRight:1}} onChange={(event) => setAnswer4(event.target.value)} value={answer4}></TextField>
            </Box>

            <Button variant="contained" sx={{marginTop:3}} onClick={() => saveQuestion()}>Save Question</Button>
        </Box>
    )

    function saveQuestion() {
        let objQuestion = {
            question: question,
            options: [answer1, answer2, answer3, answer4],
            answer_index: 0
        };

        // -- Validation

        if (!question) {
            setErrorMessage("The question is missing");
            setErrorModalOpen(true); 
            return;
        }

        if (!answer1 || !answer2 || !answer3 || !answer4) {
            setErrorMessage("One or more answers are missing");
            setErrorModalOpen(true); 
            return;
        }

        store.createTriviaQuestion(objQuestion);
    }
}

export default TriviaQuestionCreator