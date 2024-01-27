// CreateBlogs.jsx
import React, { useState } from "react";
import QuillEditor from "./Editor";
import axios from 'axios';
import Footer from "./Footer";

function CreateBlogs() {
    const [blogData, setBlogData] = useState([]);

    const handleAdd = async (data) => {
        try {
            // Post data to the API
            await axios.post("https://apitest.reachstar.io/blog/add", {
                title: data.title,
                description: data.description
            });

            // Update local state with the new data
            setBlogData([data, ...blogData]);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <div className="container-fluid p-0 mein-container-2">
            <div className="container child-div ps-3 pe-3 ps-md-5 pe-md-5 pt-3 ">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <h1 className="mb-4 text-center addNewBlog">Add New Blog</h1>
                        <div className="d-flex justify-content-center mb-5">
                            <hr className="mt-0" />
                        </div>

                        <QuillEditor name={"submit post"} onAdd={handleAdd} />
                    </div>
                </div>

            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default CreateBlogs;
