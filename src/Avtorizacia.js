import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Avtorizacia() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setErrorMessage("");
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        setErrorMessage("");
    }

    const handleClick = (e) => {
        e.preventDefault();

        var EmailErr = document.getElementById("emailerrror");
        var PassErr = document.getElementById("passworderrror");

        if (email === "" && password === "") {
            EmailErr.classList.remove("d-none");
            PassErr.classList.remove("d-none");
            document.getElementById("passwordinput").style.border = "2px solid red";
            document.getElementById("emailinput").style.border = "2px solid red";
        } else if (email === "") {
            document.getElementById("emailinput").style.border = "2px solid red";
            EmailErr.classList.remove("d-none");
        } else if (password === "" || password.length < 4) {
            document.getElementById("emailinput").style.border = "2px solid green";
            document.getElementById("passwordinput").style.border = "2px solid red";
            PassErr.classList.remove("d-none");
            EmailErr.classList.add("d-none");
        } else {
            axios.post("https://apitest.reachstar.io/signin", {
                email: email,
                password: password
            })
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        PassErr.classList.add("d-none");
                        document.getElementById("passwordinput").style.border = "2px solid green";
                        window.localStorage.setItem("email", email)
                        window.localStorage.setItem("password", password)
                        window.localStorage.setItem("loggedin", true)

                        navigate("/home");
                    } else {
                        setErrorMessage("Incorrect email or password");
                        document.getElementById("emailinput").style.border = "2px solid red";
                        document.getElementById("passwordinput").style.border = "2px solid red";
                        window.localStorage.setItem("loggedin", false);
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }

    return (
        <div className="container-fluid p-0 mein-container-2">
            <div className=" container child-div-2">
                <div className="row  align-items-center flex-column">
                    <div className="col-12 col-md-8  ps-3 pe-3">
                        <h1 className="text-center sign-in-text mt-5">Sign in here</h1>
                        <form onSubmit={handleClick} className=" p-3 p-md-5">
                            <div className="">
                                <p className="error-message">{errorMessage}</p>
                                <label className="d-block mb-2">Email <span className="span-1">*</span></label>
                                <input
                                    type="email"
                                    id="emailinput"
                                    placeholder="Enter your Email"
                                    className="w-100  ps-3 input-email"
                                    onChange={handleChangeEmail}
                                />
                                <p className="validation d-none" id="emailerrror">
                                    {errorMessage ? errorMessage : "This field is required"}
                                </p>
                            </div>
                            <div className="">
                                <label className="d-block mb-2 mt-3">Password <span className="span-1">*</span></label>
                                <input
                                    type="password"
                                    id="passwordinput"
                                    placeholder="Enter your password"
                                    className="w-100 ps-3 mb-2 inpt-password"
                                    onChange={handleChangePassword}
                                />
                                <p className="validation d-none" id="passworderrror">Password must be at least 4 characters long.</p>
                            </div>
                            <p className="have-account mb-5">
                                Don't have an account? <Link to={"/registracia"}><span className="register">Register</span></Link>
                            </p>
                            <input type="submit" className="btn btn-avtorizacia" value="Sign in" />
                        </form>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>

    )
}

export default Avtorizacia;
