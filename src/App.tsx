import React from 'react';
import './App.css';
import MainPage from "./components/mainPage/mainPage";
import CurrentCharacterPage from "./components/currentCharacterPage/currentCharacterPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GoogleLogin} from '@react-oauth/google';


function App() {
    return (

        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/*" element={<MainPage />}/>
                    <Route path='/main' element={<MainPage/>}/>
                    <Route path='/currentCharacter/:chID' element={<CurrentCharacterPage/>}/>
                </Routes>


                <div>
                    <h2>React Google Login</h2>
                    <br />
                    <br />
                    {/*<GoogleLogin*/}
                    {/*     onSuccess={responseMessage}*/}
                    {/*     onError={errorMessage}*/}
                    {/*/> */}
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}

                        onError={() => {
                            console.log('Login Failed');
                        }}

                    />
                </div>


            </div>
        </BrowserRouter>

    );
}

export default App;
