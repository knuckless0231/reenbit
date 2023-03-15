import React from 'react';
import './App.css';
import MainPage from "./components/Main Page/MainPage";
import CurrentCharacterPage from "./components/Current Character Page/currentCharacterPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/*" element={<MainPage />}/>
                    {/*<Route path='/main' element={<MainPage/>}/>*/}
                    <Route path='/main/:pageID' element={<MainPage/>}/>
                    <Route path='/currentCharacter/:chID' element={<CurrentCharacterPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
