import './App.css';
import {Link, Route, Routes, useNavigate, useParams} from "react-router-dom";
import { Home } from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Button} from "@mui/material";

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

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path ={"/about/:text"}  element = {<About/>}/>
                <Route path = "*" element={<NotFound />}/>
            </Routes>
        </div>
    )
}

export default App;
