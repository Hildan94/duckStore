import './App.css';
import {useState} from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function App() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [username, setUsername] = useState("Hildy")

    const [age, setAge] = useState("28")

    return (
        <div className="App">
            <h1>Learn React with DevOps</h1>
            <div>Hello, {username}</div>
            <div>I am {age} years old</div>



            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Button variant= "contained" onClick={ (e)=> setUsername("Troels")}>Skift navn</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant= "contained" onClick={ (e)=> setAge("27")}>Skift alder</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
}

export default App;
