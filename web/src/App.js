import './App.css';
import {useState} from "react";
import Button from '@mui/material/Button';

function App() {

    const [username, setUsername] = useState("Hildy")

    return (
        <div className="App">
            <h1>Learn React with DevOps</h1>
            <div>Hello, {username}</div>

            <Button variant= "contained" onClick={ (e)=> setUsername("Troels")}>Skift navn</Button>

        </div>
    );
}

export default App;
