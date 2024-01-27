import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import "./index.css";
import Home from "./Home";
import Avtorizacia from "./Avtorizacia";
import Registracia from "./Registration";
import Contact from "./Contact";
import Blogs from "./Blogs";
import CreateBlogs from "./CreateBlogs";
import ReadOn from "./ReadOn";
import Footer from "./Footer";

function App() {
    return (
        <BrowserRouter>
            <header>
                <Navbar />

            </header>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route index path="/" element={<Avtorizacia />} />
                <Route path="/registracia" element={<Registracia />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/createBlogs" element={<CreateBlogs />} />
                <Route path="/readOn/:id" element={<ReadOn />} />
            </Routes>
           

        </BrowserRouter>

    )
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);