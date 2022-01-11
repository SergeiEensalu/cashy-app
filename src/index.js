import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Account from "./screen/Account";
import History from "./screen/History";
import Footer from "./component/Footer";
import Work from "./screen/Work";
import Assets from "./screen/Assets";


export default function Index() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route path="account" element={<Account/>}/>
                        <Route path="works" element={<Work/>}/>
                        <Route path="assets" element={<Assets/>}/>
                        <Route path="history" element={<History/>}/>
                        <Route path="*" element={<Account/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer/>

        </React.StrictMode>
    );
}


ReactDOM.render(<Index/>,
    document.getElementById('root')
)


reportWebVitals();
