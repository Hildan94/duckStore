import './App.css';
import {Link, Route, Routes, useNavigate, useParams} from "react-router-dom";
import { Home } from "./stores/Home";
import {NotFound} from "./stores/NotFound";
import {Button} from "@mui/material";
import {duckStore} from "./stores/DuckStore";
import {observer} from "mobx-react-lite";


function App() {

    const About = ()=> {
        let {text} = useParams();
        return <div>
            <h1> About {text}</h1>
        </div>
    }


    let navigate = useNavigate();

    return(

        <div>
            <nav>
                    <li>
                        <Link to={"about/link"}>Go to link</Link>
                    </li>
            </nav>

            <Button onClick={(e)=> navigate("about/button")}> Or like this </Button>

            <Button onClick={()=> duckStore.addDucks("Elmer")}> Tilføj en and </Button>
            <ul>
                {duckStore.ducks.map((duckName, key)=>
                <li key = {key}>{duckName}</li>)}
            </ul>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path ={"/about/:text"}  element = {<About/>}/>
                <Route path = "*" element={<NotFound />}/>
            </Routes>
        </div>
    )
}

export default observer(App);
