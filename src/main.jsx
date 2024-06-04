import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import ContactForm from "./contact.jsx";
import RatAnimation from "./animacja.jsx";
import Weather from "./weather.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <>
                <header>
                    <div className="nav">
                        <NavLink className="nav-link" to='/'>Pogoda</NavLink>
                        <NavLink className="nav-link" to='/rat'>Porusz Szczurem</NavLink>
                        <NavLink className="nav-link" to='/contact'>Kontakt</NavLink>
                    </div>
                </header>
                <main className="main-content">
                    <Routes>
                        <Route path='/' element={
                                <Weather/>
                        } />
                        <Route path='/rat' element={
                            <RatAnimation/>
                        } />
                        <Route path='/contact' element={
                            <ContactForm/>
                        } />
                    </Routes>
                </main>
            </>
        </BrowserRouter>
    </React.StrictMode>
);
