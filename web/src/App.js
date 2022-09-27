import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import { TestPage } from "./pages/TestPage";
import { Home } from "./pages/Home";

function App() {

    return(

        <div>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="testPage">Test page</Link>
                </li>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/testPage" element={<TestPage/>}/>
            </Routes>
        </div>
    )
}

export default App;
