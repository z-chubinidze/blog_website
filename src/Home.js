// Home.jsx
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./index.css";
import Footer from "./Footer";


function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://apitest.reachstar.io/blog/list");
                setData(response.data.reverse());
                console.log(response.data);
            } catch (error) {
                console.error('Error', error);
            }
        };

        fetchData();

    }, []);

    

    return (
        <>
            <div className="container-fluid p-0">
                <div className="position">
                    <Carousel />
                </div>
            </div>
            <div className="container-fluid p-0 mein-container">
                <div className="container child-div pt-5">
                    <h1 className="mb-4 text-center addNewBlog">LATEST STORIES</h1>
                    <div className="d-flex justify-content-center mb-5">
                        <hr className="mt-0" />
                    </div>
                    {data.map((item, index) => (
                        <div key={index} className="blog-box position-relative mb-5">
                            <h1 className="blogtitle">{item.title}</h1>
                            <div className="d-flex ">
                                <p className="blogername">by <span className="userFName">Madison Barnet</span> <span className="ms-1 me-1">/</span></p>
                                <p className="blogername"> in <span className="userFName">Technology </span><span className="ms-1 me-1">/</span></p>
                                <p className="blogername"> 2 Min Read</p>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: item.description }} className="blogtext" />
                            <div className="d-flex gap-3">
                                <Link to={`/readOn/${item.id}`}>
                                    <button type="button" className="btn btn-danger readOnButton">read on</button>
                                </Link>
                                <button type="button" className="btn btn-danger readLaterButton">
                                    <FontAwesomeIcon icon={faBookmark} className="icon me-1" />
                                    read later
                                </button>

                            </div>
                            <p className="backgroundLetter">k</p>
                        </div>
                    ))}

                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

export default Home;
