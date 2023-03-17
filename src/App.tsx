import React from 'react';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import CurrentCharacterPage from "./components/CurrentCharacterPage/currentCharacterPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/*" element={<MainPage />}/>
                    <Route path='/main/:pageID' element={<MainPage/>}/>
                    <Route path='/currentCharacter/:chID' element={<CurrentCharacterPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
