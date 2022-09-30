import './App.css';
import {Link, Route, Routes, useNavigate, useParams} from "react-router-dom";
import { Home } from "./stores/Home";
import {NotFound} from "./stores/NotFound";
import {Button, styled,Box, Paper, Grid} from "@mui/material";
import {duckStore} from "./stores/DuckStore";
import {observer} from "mobx-react-lite";


function App() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const About = ()=> {
        let {text} = useParams();
        return <div>
            <h1> About {text}</h1>

            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={8}>
            <Item>xs=8</Item>
            </Grid>
            <Grid item xs={4}>
            <Item>xs=4</Item>
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
    };


    let navigate = useNavigate();

    return(

        <div>
            <nav>

                <li>
                    <Link to={"about/link"}>Go to link</Link>
                </li>

            </nav>

            <Button onClick={(e)=> navigate("about/button")}> Or like this </Button>

            <Button onClick={()=> duckStore.addDucks("Peter")}> Tilføj en and </Button>
            <ul>
                {duckStore.ducks.map((duckName, key)=>
                <li key = {key}>{duckName}</li>)}
            </ul>

            <Routes>
                <Route path= "/" element={<Home/>}/>
                <Route path = {"/about"}  element = {<About/>}/>
                <Route path = {"/about/:text"}  element = {<About/>}/>
                <Route path = "*" element={<NotFound />}/>
            </Routes>
        </div>
    )
}

export default observer(App);
