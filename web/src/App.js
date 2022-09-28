import './App.css';
import {Link, Route, Routes, useNavigate, useParams} from "react-router-dom";
import { Home } from "./stores/Home";
import {NotFound} from "./stores/NotFound";
import {Button} from "@mui/material";
import {giraffeStore} from "./stores/GiraffeStore";
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

            <Button onClick={()=> giraffeStore.addGiraffe("Elmer")}> Tilføj en giraf </Button>
            <ul>
                {giraffeStore.giraffes.map((giraffeName, key)=>
                <li key = {key}>{giraffeName}</li>)}
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
