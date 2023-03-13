import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from './redux/store'
import {GoogleOAuthProvider} from "@react-oauth/google";


// {character.map((ch)=> ch.id === +chID )}
// нужно достать chID без :


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <GoogleOAuthProvider clientId="218935189436-fg1p3rvj074uaasrdd53tgn3cb10jld3.apps.googleusercontent.com">
    <Provider store={store}>
            <App/>
    </Provider>
    </ GoogleOAuthProvider>
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
