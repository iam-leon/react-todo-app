import React from "react"
import TodoContainer from "./functionComponents/TodoContainer"
import About from "./functionComponents/pages/About"
import Navbar from "./functionComponents/Navbar"
import DynamicPage from "./functionComponents/pages/DynamicPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

const App = () => {
    return ( 
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={ <TodoContainer /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/about/:id" element={<DynamicPage/>} />
            </Routes>
        </Router>
     );
}
 
export default App;