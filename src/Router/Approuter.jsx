import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Core/Main";
import About from "../Shared/Components/About";
import Conference from "../Shared/Components/Conference-Track";
import Contact from "../Shared/Components/Contact-Us";
import EditorialBoard from "../Shared/Components/EditorialBoard";
import KeyDates from "../Shared/Components/KeyDates";
import Organizing from "../Shared/Components/Organizing";
import PaperSubmission from "../Shared/Components/PaperSubmission";
import Scope from "../Shared/Components/Scope";
import Home from "../Shared/Components/Home";




export default function Approuter () {
    
    return(

        <>
        <BrowserRouter>
        <Routes>
            <Route element={<Main/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Conference-Track" element={<Conference/>}/>
                <Route path="/Contact-Us" element={<Contact/>}/>
                <Route path="/EditorialBoard" element={<EditorialBoard/>}/>
                <Route path="/KeyDates" element={<KeyDates/>}/>
                <Route path="/Organizing" element={<Organizing/>}/>
                <Route path="/PaperSubmission" element={<PaperSubmission/>}/>
                <Route path="/Scope" element={<Scope/>}/>
            </Route>
        </Routes>
        </BrowserRouter></>
    )
}