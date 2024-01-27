// import React, { useState } from "react";
// import axios from "axios";
// import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
// function Registracia() {

//     const [fulname, setFulname] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [formSubmitted, setFormSubmitted] = useState(false);

//     const handleChangeFname = (e) => {    //ვიჭერთ  სახელის ველში ჩაწერის ინფორმაციას
//         setFulname(e.target.value)

//     }

//     const handleChangeEmail = (e) => {    //ვიჭერთ  მაილის ველში ჩაწერის ინფორმაციას

//         setEmail(e.target.value)

//     }
//     const handleChangePassword = (e) => {    //ვიჭერთ  პაროლის ველში ჩაწერის ინფორმაციას

//         setPassword(e.target.value)

//     }


//     // ფორმის ვალიდაციები
//     const handleClick = (e) => {
//         e.preventDefault()
//         var fNameErr = document.getElementById("FnameErr")
//         var EmailErr = document.getElementById("EmailErr")
//         var PassErr = document.getElementById("passErr")

//         if (fulname === "" && email === "" && password === "") {
//             fNameErr.classList.remove("d-none")
//             EmailErr.classList.remove("d-none")
//             PassErr.classList.remove("d-none")
//             document.getElementById("Fnameinput").style.border = "2px solid red"
//             document.getElementById("Eminput").style.border = "2px solid red";
//             document.getElementById("pasinput").style.border = "2px solid red";

//         } else if (fulname === "") {

//             fNameErr.classList.remove("d-none")
//             document.getElementById("Fnameinput").style.border = "2px solid red"

//         } else if (email === "") {

//             fNameErr.classList.add("d-none")
//             EmailErr.classList.remove("d-none")
//             document.getElementById("Fnameinput").style.border = "2px solid green"
//             document.getElementById("Eminput").style.border = "2px solid red";

//         } else if (password === "") {
//             EmailErr.classList.add("d-none")
//             PassErr.classList.remove("d-none")
//             document.getElementById("Eminput").style.border = "2px solid green";
//             document.getElementById("pasinput").style.border = "2px solid red";
//         }
//         else {
//             PassErr.classList.add("d-none")
//             document.getElementById("pasinput").style.border = "2px solid green";
//             window.alert("warmatebuuuuulllllllllll")
//             setEmail("")
//             setPassword("")
//             setFulname("")

//         }


//         if (fulname && email && password) {
//             axios
//                 .post("https://apitest.reachstar.io/signup", {
//                     name: fulname,
//                     email: email,
//                     password: password,
//                 })
//                 .then((response) => {
//                     console.log(response.status);
//                     setFormSubmitted(true);
//                 })
//                 .catch((error) => {
//                     console.error("Error:", error);
//                 });
//         }


//     }
//     const navigate = useNavigate();


//     if (formSubmitted) {
//         return <Navigate to="/" />;
//     }
//     return (
//         <div className="container-fluid p-0 mein-container-2">

//             <div className=" container child-div ">
//                 <div className="row align-items-center flex-column">
//                     <div className="col-12 col-md-8  col-lg-6 ps-3 pe-3">
//                         <h1 className="text-center sign-in-text mt-5">registration form</h1>
//                         <form onSubmit={handleClick} className=" p-3 p-md-5">
//                             <div className="">
//                                 <label className="d-block mb-2">Full Name <span className="span-1">*</span></label>
//                                 <input type="text" placeholder="enter your Full Name" id="Fnameinput" className="w-100  ps-3 input-email"
//                                     onChange={handleChangeFname}
//                                     value={fulname}
//                                 />
//                                 <p className="validation d-none" id="FnameErr">this fild is required</p>
//                             </div>
//                             <div className="">
//                                 <label className="d-block mb-2 mt-3">Email <span className="span-1">*</span></label>
//                                 <input type="email" placeholder="enter your Email" id="Eminput" className="w-100  ps-3 input-email"
//                                     onChange={handleChangeEmail}
//                                     value={email}
//                                 />
//                                 <p className="validation d-none" id="EmailErr">this fild is required</p>
//                                 <p className="email-validate d-none" id="validEmailErr">Please enter a valid email address.</p>
//                             </div>
//                             <div className="w-100">
//                                 <label className="d-block mb-2 mt-3">Password <span className="span-1">*</span></label>
//                                 <input type="password" placeholder="enter your password" id="pasinput" className="w-100 ps-3  inpt-password"
//                                     onChange={handleChangePassword}
//                                     value={password}
//                                 />
//                                 <p className="validation d-none" id="passErr">this fild is required</p>
//                             </div>
//                             <p className="have-account mb-5">have account? <Link to={"/"}><span className="register">sign in</span></Link></p>
//                             <input type="submit" className="btn btn-avtorizacia" value="sign in" />
//                         </form>

//                         <Outlet />
//                     </div>
//                 </div>


//             </div>
//             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

//         </div>

//     )
// }

// export default Registracia

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Registracia() {
    const [formData, setFormData] = useState({
        fulname: "",
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState({
        fulname: false,
        email: false,
        password: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false,
        }));
        console.log("handleChange:", name, value);
    };

    const handleClick = (e) => {
        e.preventDefault();

        const errors = {};

        // Basic validation, you can add more specific validation if needed
        if (!formData.fulname.trim()) {
            errors.fulname = true;
        }

        if (!formData.email.trim()) {
            errors.email = true;
        } else if (!isValidEmail(formData.email)) {
            errors.email = "invalid";
        }

        if (formData.password.trim().length < 4) {
            errors.password = true;
        }

        if (Object.keys(errors).length === 0) {
            // თუ არ იქნება რაიმე შეცდომა
            axios.post("https://apitest.reachstar.io/signup", { //პოსტ მეთოდით გავაგზავნთ  ამ ინფორმაციას
                name: formData.fulname,
                email: formData.email,
                password: formData.password,
            })
                .then((response) => {
                    navigate("/"); // გადაგვიყვანს ავტორიზაციის გვერდზე
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } else {
            setFormErrors(errors);// თუ რაიმე შეცდომა დაფიქსირდა ამ ერორს ცაწერს formErrors-ში
        }

    };

    return (
        <div className="container-fluid p-0 mein-container-2">
            <div className="container child-div-3">
                <div className="row align-items-center flex-column">
                    <div className="col-12 col-md-8 ps-3 pe-3">
                        <h1 className="text-center sign-in-text mt-5">Registration Form</h1>
                        <form onSubmit={handleClick} className="p-3 p-md-5 pt-4 pt-md-4">
                            {Object.keys(formData).map((field) => (
                                <div key={field}>
                                    <label className="d-block mb-2 mt-3">
                                        {field.charAt(0).toUpperCase() + field.slice(1)} <span className="span-1">*</span>
                                    </label>
                                    <input
                                        type={field === "password" ? "password" : "text"}
                                        placeholder={`Enter your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                        style={{
                                            width: '100%',
                                            padding: '0.5rem',
                                            border: `2px solid ${formErrors[field] ? "red" : formData[field].trim() ? "green" : "gray"}`,
                                        }}
                                        name={field}
                                        onChange={handleChange}
                                        value={formData[field]}
                                    />
                                    {formErrors[field] === true && <p className="validation">This field is required</p>}
                                    {formErrors[field] === "invalid" && (
                                        <p className="validation">Please enter a valid email address.</p>
                                    )}
                                </div>
                            ))}
                            {formErrors.password && (
                                <p className="validation" style={{ marginTop: '3px', marginBottom : "12px" }}>
                                    Please enter a password with a minimum of 4 characters.
                                </p>
                            )}
                            <p className="have-account mb-5">
                                Already have an account? <Link to={"/"}><span className="register">Sign in</span></Link>
                            </p>
                            <input type="submit" className="btn btn-avtorizacia" value="Sign up" />
                        </form>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

// Helper function to check the validity of an email address
const isValidEmail = (email) => {
    // Add your email validation logic here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export default Registracia;

