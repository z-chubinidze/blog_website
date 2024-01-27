import React from "react";
import Footer from "./Footer";


function Contact() {

    return (
        <div className="container-fluid p-0 mein-container-2">
            <div className=" container child-div">
                <h1 className="mb-4 text-center addNewBlog">LATEST STORIES</h1>
                <div className="d-flex justify-content-center mb-5">
                    <hr className="mt-0" />
                </div>
                <div className="position relative">
                    <form className="form-control border-0 shadow-none">
                        <label className="mb-2">comment</label>
                        <textarea className="comentTexarea mb-4" placeholder="comment..." />
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div>
                                    <label className="mb-2">name*</label>
                                    <input className="form-control commentInput mb-4" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div>
                                    <label className="mb-2">email*</label>
                                    <input className="form-control commentInput mb-4" />
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div>
                                    <label className="mb-2">website*</label>
                                    <input className="form-control commentInput mb-4" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn readOnButton">submit comment</button>
                    </form>
                </div>

            </div>

            <footer>
                <Footer />
            </footer>
        </div>


    )
}

export default Contact