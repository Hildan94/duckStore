import './App.css';
import {useState} from "react";

function App() {

    const [username, setUsername] = useState("Hildy")

    return (
        <div className="App">
            <h1>Learn React with DevOps</h1>
            <div>Hello, {username}</div>

            <button onClick={ (e)=> setUsername("Troels")}>Skift navn</button>

        </div>
    );
}

export default App;
