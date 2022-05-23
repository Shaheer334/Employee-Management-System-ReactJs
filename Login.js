import { Formik } from "formik"
import React from "react"
import { useNavigate } from "react-router"
import * as Yup from 'yup'
import axios from "axios"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import jwt_decode from "jwt-decode"
import { Link } from 'react-router-dom'
toast.configure()



const LoginForm = () => {
    const navigate = useNavigate()
    const Login = async (data) => {
        try {
            const response = await axios.post("http://localhost:3001/employee/login", data);
            const decoded = jwt_decode(response.data.token)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('role', decoded.role)
            localStorage.setItem('email', decoded.email)
            localStorage.setItem('userId', decoded.id)
            if (response.status === 200) {
                navigate('/dashboard')
                toast.success("Login Successfull", {
                    position: toast.POSITION.TOP_CENTER,
                    pauseOnFocusLoss: false,
                });
            }
        } catch (err) {
            const message = err.response.status
            console.log(message)
            if (message === 404) {
                toast.error("Email not found", {
                    position: toast.POSITION.TOP_CENTER,
                    pauseOnFocusLoss: false
                })
            }
            if (message === 401) {
                toast.warn("Invalid Credentials", {
                    position: toast.POSITION.TOP_CENTER,
                    pauseOnFocusLoss: false
                })
                toast.warn("Login Failed", {
                    position: toast.POSITION.TOP_CENTER,
                    pauseOnFocusLoss: false
                })
            }
        }
    }
    const schema = Yup.object().shape(
        {
            email: Yup.string().required("Email is Required").email("Must be valid email").max(255),
            password: Yup.string().required("Password is Required").max(255)
        }
    )
    return (
        <>
            <Formik initialValues={{ email: "", password: "" }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    const objData = {
                        email: values.email,
                        password: values.password
                    }
                    Login(objData)
                    actions.resetForm()
                }}
            >
                {({
                    handleBlur,
                    touched,
                    values,
                    errors,
                    handleChange,
                    handleSubmit
                }) => (
                    <form>
                        <div className="h-screen bg-gray-300 px-3 py-16">
                            <div className="max-w-md mx-auto bg-white p-3 rounded">
                                <div className="px-3 py-5">
                                    <div className="text-center">
                                        <h1 className="text-2xl mb-4 text-red-400">Welcome Employee Management System</h1>
                                    </div>
                                    <br />
                                    <div className="text-center">
                                        <h1 className="text-2xl mb-4 text-green-400">Log in</h1>
                                    </div>
                                    <div className="relative mb-3">
                                        <span className="ml-2 bg-white px-2 absolute -top-3 text-sm">Email</span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={values.email}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            className="transition duration-500 border h-12 rounded w-full px-2 mb-2" />
                                        <label style={{ color: 'red' }}>{errors.email && touched.email && errors.email}</label>
                                    </div>
                                    <div className="relative mb-1">
                                        <span className="ml-2 bg-white px-2 absolute -top-3 text-sm" >Password</span>
                                        <input
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            className="transition duration-500 border h-12 rounded w-full px-2 mb-2" />
                                        <label style={{ color: 'red' }}>{errors.password && touched.password && errors.password}</label>
                                    </div>
                                    <div className="text-right mb-3">
                                        <Link to="/forgetpassword" className="cursor-pointer text-blue-500 hover:text-blue-700 nav-item nav-link">
                                            Forget Password?
                                        </Link>
                                    </div>
                                    <button type="submit" onClick={handleSubmit}
                                        className="h-12 w-full hover:bg-red-800 focus:outline-none bg-red-700 rounded text-white mb-3">
                                        Signin
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default LoginForm