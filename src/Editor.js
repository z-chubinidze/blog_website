// QuillEditor.jsx
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";


const QuillEditor = ({ onAdd, name, initialData }) => {
    const [editorHtml, setEditorHtml] = useState('');
    const [title, setTitle] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || '');
            setEditorHtml(initialData.description || '');
            setIsEditing(true);
        }
    }, [initialData]);

    const handleEditorChange = (value) => {
        setEditorHtml(value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        const blogTitle = document.getElementById("title-input");
        const titleError = document.getElementById("titleError");

        if (title === "") {
            blogTitle.style.border = "2px solid red";
            titleError.classList.remove("d-none");
        } else {
            blogTitle.style.border = "2px solid #c62641";
            titleError.classList.add("d-none");
            navigate("/home");
            
            onAdd({ title, description: editorHtml });
            setEditorHtml('');
            setTitle('');
            window.alert(isEditing ? "Blog updated successfully" : "Blog created successfully");
        }
    };

    return (
        <div>
            <form className="form-control blogForm ps-3 pe-3 ps-md-5 pe-md-5 pt-3 pb-4 mb-5" onSubmit={handleButtonClick}>
                <div>
                    <label className='titleLabel mb-2'>Title<span className="span-1">*</span></label>
                    <input
                        type="text"
                        id='title-input'
                        placeholder="Enter Title"
                        value={title}
                        onChange={handleTitleChange}
                        className='title-input w-100 mb-1'
                    />
                    <p className='d-none text-danger mb-0 validation' id='titleError'>Title is required</p>
                </div>
                <label className='titleLabel mb-2 mt-3'>Description<span className="span-1">*</span></label>
                <ReactQuill
                    theme="snow"
                    value={editorHtml}
                    onChange={handleEditorChange}
                />
                <button type='submit' className='btn btn-success blogAddButton mt-4'>
                    {isEditing ? 'Update' : name}
                </button>
            </form>
        </div>
    );
};

export default QuillEditor;

