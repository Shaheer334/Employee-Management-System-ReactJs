import React from 'react'
import axios from 'axios'
import { Formik } from 'formik'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const ForgetPass = () => {
    const navigate = useNavigate()
    const role = localStorage.getItem('role')
    const updatePassApi = async (data) => {
        try {
            const headers = {
                'Content-Type': 'application/json'
            }
            await axios.post(`http://localhost:3001/employee/forget-password`, data, { headers })
            toast.success("Verification link has been sent to your email", {
                position: toast.POSITION.TOP_CENTER
            })
            navigate("/verifypassword")
        } catch (err) {
            const message = err.response.status
            if (message === 401) {
                toast.error("System Error", {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.error("Email not found")
            }
        }
    }

    const schema = Yup.object().shape({
        email: Yup.string().required("This field is required").email(),
    })

    return (
        <>
            <Formik initialValues={{ email: "" }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    const objData = {
                        email: values.email,
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
                                        <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">Email Verification!</h3>
                                        <p1 className="text-sm font-medium text-red-500 dark:text-white">Verification link will be send to your email.</p1>
                                        <br />
                                        <p1 className="text-sm font-medium text-red-500 dark:text-white">Copy the link and paste it in the token section.</p1>
                                        <div>
                                            <label htmlFor="emails" className="text-sm font-medium text-green-400 block mb-2 dark:text-gray-300">Email</label>
                                            <input type="email" name="email" id="emails" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="enter your email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                values={values.email}
                                            />
                                            <label className="error" style={{ color: 'red' }}>{errors.email && touched.email && errors.email}</label>
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

export default ForgetPass