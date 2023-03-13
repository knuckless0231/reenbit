import React from 'react';
import './App.css';
import MainPage from "./components/mainPage/mainPage";
import CurrentCharacterPage from "./components/currentCharacterPage/currentCharacterPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    console.log(1)
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/main' element={<MainPage/>}/>
                    <Route path='/currentCharacter/:chID' element={<CurrentCharacterPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
