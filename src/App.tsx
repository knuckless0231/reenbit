import React from 'react';
import './App.css';
import MainPage from "./components/mainPage/mainPage";
import CurrentCharacterPage from "./components/currentCharacterPage/currentCharacterPage";


function App() {
    return (
        <div className="App">
            {/*<MainPage/>*/}
            <CurrentCharacterPage/>
        </div>
    );
}

export default App;
