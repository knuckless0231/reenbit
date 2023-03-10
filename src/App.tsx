import React from 'react';
import './App.css';
import MainPage from "./components/mainPage/mainPage";
import CurrentCharacterPage from "./components/currentCharacterPage/currentCharacterPage";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path='/main' element={<MainPage/>}></Route>
                <Route path='/currentCharacter/:chID' element={<CurrentCharacterPage/>}></Route>
            </Routes>

        </div>
        </BrowserRouter>

    );
}

export default App;
