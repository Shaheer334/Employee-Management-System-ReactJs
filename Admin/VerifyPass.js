import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const VerifyPass = () => {
    const navigate = useNavigate()
    const role = localStorage.getItem('role')
    const updatePassApi = async (data) => {
        try {
            const headers = {
                'Content-Type': 'application/json'
            }
            await axios.post(`http://localhost:3001/employee/verify-password`, data, { headers })
            toast.success("New Password has been successfully set", {
                position: toast.POSITION.TOP_CENTER
            })
            navigate("/")
        } catch (err) {
            const message = err.response.status
            if (message === 400) {
                toast.error("Incorrect or Expired Link", {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.error("Error at token verification", {
                    position: toast.POSITION.TOP_CENTER
                })
            }
        }
    }

    const schema = Yup.object().shape({
        token: Yup.string().required("This field is required"),
        password: Yup.string().required("This field is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password must contain 8 characters, one Uppercase, one Lowercase, one Number and one special case character")
    })

    return (
        <>
            <Formik initialValues={{ token: "", password: "" }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    const objData = {
                        token: values.token,
                        password: values.password
                    }
                    updatePassApi(objData)
                    actions.resetForm()
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <>
                        {role === 'admin' || role === 'employee' || role === 'HR' ?
                            <div className="max-w-2xl mx-auto">
                                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                                    <form className="space-y-6">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Set New Password Here!</h3>
                                        <p1 className="text-sm font-medium text-red-500 dark:text-white">Paste verification link in the token section</p1>
                                        <div>
                                            <label htmlFor="tokens" className="text-sm font-medium text-green-400 block mb-2 dark:text-gray-300">Token</label>
                                            <input type="text" name="token" id="tokens" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm 
                                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500
                                    dark:placeholder-gray-400 dark:text-white" placeholder="paste your token here"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                values={values.token}
                                            />
                                            <label className="error" style={{ color: 'red' }}>{errors.token && touched.token && errors.token}</label>
                                        </div>
                                        <div>
                                            <label htmlFor="passwords" className="text-sm font-medium text-green-400 block mb-2 dark:text-gray-300">New Password</label>
                                            <input autoComplete="current-password" type="password" name="password" id="passwords" placeholder="enter new password" className="bg-gray-50 border 
                                    border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 
                                    dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                values={values.password}
                                            />
                                            <label className="error" style={{ color: 'red' }}>{errors.password && touched.password && errors.password}</label>
                                        </div>
                                        <button type="submit" onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                                    </form>
                                </div>
                            </div>
                            :
                            navigate('/')
                        }
                    </>
                )}
            </Formik>
        </>
    )
}

export default VerifyPass