import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import EditPage from "./EditPage";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function ReadOn() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [currentUser, setCurrentUser] = useState("currentUserId"); // Replace with the actual current user ID
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://apitest.reachstar.io/blog/get/${id}`);
            setData(response.data);
        } catch (error) {
            console.error('Error', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const PostUpdated = (updatedData) => {
        fetchData();
        setEditMode(false);
    };

    const showEditPage = () => {
        setEditMode(true); 
    };

    const deletePost = () => {
        axios.delete(`https://apitest.reachstar.io/blog/delete/${id}`)
            .then(() => {
                navigate("/home");
            })
            .catch((error) => {
                console.error('Error', error);
            });
    };
    const onCloseEditPage = () => {
        setEditMode(false);
    };
    return (
        <>
            <div className="container-fluid p-0 mein-container-2">
                <div className="container child-div pt-5">
                    <h1 className="mb-4 text-center addNewBlog">full news</h1>
                    <div className="d-flex justify-content-center mb-5">
                        <hr className="mt-0" />
                    </div>
                    {Object.keys(data).length > 0 && (
                        <div className="blog-box position-relative mb-5">
                            <h1 className="blogtitle">{data.title}</h1>
                            <div className="d-flex ">
                                <p className="blogername">by <span className="userFName">Madison Barnet</span> <span className="ms-1 me-1">/</span></p>
                                <p className="blogername"> in <span className="userFName">Technology </span><span className="ms-1 me-1">/</span></p>
                                <p className="blogername"> 2 Min Read </p>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: data.description }} className="blogtext-2" />
                            <div className="d-flex gap-3 mb-5">
                                <button type="button" className="btn editButton cursor-ponter" onClick={showEditPage}>edit</button>
                                <button type="button" className="btn editButton" onClick={deletePost}>delete</button>



                            </div>
                            <div className="row pb-5 mb-5">
                                <div className="col-4">
                                    <button type="button" className="btn facebook w-100"><FontAwesomeIcon icon={faFacebook} /></button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn tviter w-100"><FontAwesomeIcon icon={faTwitter} /></button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn Reddit w-100">Reddit</button>
                                </div>
                            </div>
                            <h1 className="mb-4 text-center addNewBlog">add comment</h1>
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
                            <p className="backgroundLetter top-0">k</p>
                        </div>
                    )}
                </div>
                {editMode && (
                    <EditPage data={data} onPostUpdated={PostUpdated} onClose={onCloseEditPage} />
                )}

                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

export default ReadOn;
