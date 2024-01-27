import React from "react";
import { Link } from "react-router-dom"
function Carousel() {

    return (

        <div id="carouselExampleCaptions" className="carousel slide position-fixed z-n1 w-100 top-0">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active position-relative">
                    <div className="position-absolute image-opacity"></div>
                    <img src="../images/image-1.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption position-absolute ">
                        <h1 className="carousel-title">What could possibly go wrong?</h1>
                        <p className="userName"><span>Bay Madison Barnet </span>/<span> In Humans </span>/<span> 5 comments</span></p>
                        <div className="d-flex gap-3 justify-content-center mt-5 mt-md-4">
                            <Link>
                                <button type="button" className="btn btn-2">Read on</button>
                            </Link>
                            <Link>
                                <button type="button" className="btn btn-3">Read Later</button>
                            </Link>
                        </div>
                    </div>


                </div>
                <div className="carousel-item position-relative">
                    <div className="position-absolute image-opacity"></div>
                    <img src="../images/image-2.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption ">
                        <h1 className="carousel-title text-dark">A beautiful blog with no images </h1>
                        <p className="userName"><span>Bay Madison Barnet </span>/<span> In Politics </span>/<span> 3 comments</span></p>
                        <div className="d-flex gap-3 justify-content-center mt-5 mt-md-4">
                            <Link>
                                <button type="button" className="btn btn-2">Read on</button>
                            </Link>
                            <Link>
                                <button type="button" className="btn btn-3">Read Later</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item position-relative">
                    <div className="position-absolute image-opacity"></div>
                    <img src="../images/image-3.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption ">
                        <h1 className="carousel-title text-warning">The simplest ways to choose the best</h1>
                        <p className="userName"><span>Bay Madison Barnet </span>/<span> In Culture </span>/<span> 2 comments</span></p>
                        <div className="d-flex gap-3 justify-content-center mt-5 mt-md-4">
                            <Link>
                                <button type="button" className="btn btn-2">Read on</button>
                            </Link>
                            <Link>
                                <button type="button" className="btn btn-3">Read Later</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item position-relative">
                    <div className="position-absolute image-opacity"></div>
                    <img src="../images/image-4.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption ">
                        <h1 className="carousel-title text-primary">What does your pet think about you?</h1>
                        <p className="userName"><span>Bay Madison Barnet </span>/<span> In Business </span>/<span> 0 comments</span></p>
                        <div className="d-flex gap-3 justify-content-center mt-5 mt-md-4">
                            <Link>
                                <button type="button" className="btn btn-2">Read on</button>
                            </Link>
                            <Link>
                                <button type="button" className="btn btn-3">Read Later</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel