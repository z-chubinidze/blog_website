
import React, { useState, useEffect } from "react";
import QuillEditor from "./Editor"; 
import axios from 'axios';

function EditPage({ data, onPostUpdated, onClose }) {
    const [editedData, setEditedData] = useState(data);

    const handleEdit = async (updatedData) => {
        try {
            await axios.put(`https://apitest.reachstar.io/blog/edit/${data.id}`, {
                title: updatedData.title,
                description: updatedData.description
            });
            setEditedData(updatedData);
          
            onPostUpdated(updatedData);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container-fluid p-0 mein-container-3">
            <div className="container child-div-5 ps-0 pe-0 pt-3">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div id="editPage" className="editeditorbox w-100">
                            <QuillEditor
                                name="Save"
                                onAdd={(newData) => handleEdit(newData)}
                                initialData={editedData}
                            />
                            <button
                                type="button"
                                className="btn-close bg-danger position-absolute top-0 end-0"
                                aria-label="Close"
                                onClick={() => onClose()}
                            ></button>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    );
}

export default EditPage;
