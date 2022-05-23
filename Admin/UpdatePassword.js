import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const UpdatePassword = () => {
    const navigate = useNavigate()
    const userId = localStorage.getItem('userId')
    const userEmail = localStorage.getItem('email')
    const role = localStorage.getItem('role')
    const myToken = localStorage.getItem('token')
    const updatePassApi = async (data) => {
        try {
            console.log("shaheer")
            const headers = {
                'Content-Type': 'application/json',
                Authentication: `Bearer ${myToken}`
            }
            await axios.patch(`http://localhost:3001/employee/${userId}`, data, { headers })
            toast.success("Password successfully updated", {
                position: toast.POSITION.TOP_CENTER
            })
            navigate('/dashboard')
        } catch (err) {
            const message = err.response.status
            if (message === 401) {
                toast.error("Error at updating password", {
                    position: toast.POSITION.TOP_CENTER
                })
            }
        }
    }

    const schema = Yup.object().shape({
        oldPassword: Yup.string().required("This field is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password must contain 8 characters, one Uppercase, one Lowercase, one Number and one special case character"),
        newPassword: Yup.string().required("This field is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password must contain 8 characters, one Uppercase, one Lowercase, one Number and one special case character")
    })

    return (
        <>
            <Formik initialValues={{ oldPassword: "", newPassword: "" }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    const objData = {
                        email: userEmail,
                        oldPassword: values.oldPassword,
                        newPassword: values.newPassword,
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
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <form className="space-y-6">
                                {role === 'admin' || role === 'employee' || role === 'HR' ?
                                    <>
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Update Password Here!</h3>
                                        <div>
                                            <label htmlFor="oldpasswords" className="text-sm font-medium text-green-400 block mb-2 dark:text-gray-300">Old Passowrd</label>
                                            <input autoComplete="current-password" type="password" name="oldPassword" id="oldpasswords" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="enter old password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                values={values.oldPassword}
                                            />
                                            <label className="error" style={{ color: 'red' }}>{errors.oldPassword && touched.oldPassword && errors.oldPassword}</label>
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="text-sm font-medium text-green-400 block mb-2 dark:text-gray-300">New Password</label>
                                            <input autoComplete="new-password" type="password" name="newPassword" id="password" placeholder="enter new password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                values={values.newPassword}
                                            />
                                            <label className="error" style={{ color: 'red' }}>{errors.newPassword && touched.newPassword && errors.newPassword}</label>
                                        </div>
                                        <button type="submit" onClick={handleSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                                    </>
                                    :
                                    navigate('/')
                                }
                            </form>
                        </div>
                    </div>

                )}
            </Formik>

        </>
    )
}

export default UpdatePassword
