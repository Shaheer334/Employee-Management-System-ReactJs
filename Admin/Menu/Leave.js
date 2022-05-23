import React from 'react'
import { Formik } from "formik"
import { useLocation } from "react-router"
import * as Yup from 'yup'
import axios from "axios"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Menu from './Menu'
const Leave = () => {
    const { state } = useLocation()
    const data = state
    const role = localStorage.getItem('role')
    const myToken = localStorage.getItem('token')
    const leaveData = async (data) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + myToken
        };
        try {
            const response = await axios.post("http://localhost:3001/leave", data, { headers });
            if (response.status === 201) {
                toast.success("Leave Submitted Successfully", {
                    position: toast.POSITION.TOP_CENTER,
                    pauseOnFocusLoss: false,
                });
            }
        } catch (err) {
            const message = err.response.status
            console.log(message)
            if (message === 400) {
                toast.error("Enter Some Data First", {
                    position: toast.POSITION.TOP_CENTER,
                    pauseOnFocusLoss: false
                })
            }
            if (message === 500) {
                toast.warn("Error occured", {
                    position: toast.POSITION.TOP_CENTER,
                    pauseOnFocusLoss: false
                })
            }
        }
    }
    const schema = Yup.object().shape(
        {
            date: Yup.date().required("Date is Required"),
            reason: Yup.string().required("Reason is Required").max(255).min(10)
        }
    )
    return (
        <>
            <Formik initialValues={{ date: "", reason: "" }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    const objData = {
                        employeeId: data._id,
                        date: values.date,
                        reason: values.reason
                    }
                    leaveData(objData)
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

                    <>
                        <div>
                            <Menu />
                        </div>
                        {role === 'admin' ?
                            <form>
                                <div className="h-screen bg-gray-100 px-3 py-16">
                                    <div className="max-w-md mx-auto bg-white p-3 rounded">
                                        <div className="px-3 py-5">
                                            <div className="text-center">
                                                <h1 className="text-2xl mb-4 text-red-400">Leave Form</h1>
                                            </div>
                                            <br />
                                            <div className="relative mb-3">
                                                <span className="ml-2 bg-white px-2 absolute -top-3 text-sm">Date</span>
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={values.date}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    className="transition duration-500 border h-12 rounded w-full px-2 mb-2" />
                                                <label style={{ color: 'red' }}>{errors.date && touched.date && errors.date}</label>
                                            </div>
                                            <div className="relative mb-1">
                                                <span className="ml-2 bg-white px-2 absolute -top-3 text-sm" >Reason</span>
                                                <input
                                                    type="text"
                                                    name="reason"
                                                    value={values.reason}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    className="transition duration-500 border h-12 rounded w-full px-2 mb-2" />
                                                <label style={{ color: 'red' }}>{errors.reason && touched.reason && errors.reason}</label>
                                            </div>
                                            <button type="submit" onClick={handleSubmit}
                                                className="h-12 w-full hover:bg-red-800 focus:outline-none bg-red-700 rounded text-white mb-3">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            :
                            <h1 className='items-center justify-center text-center text-5xl text-red-700'>Un Authorized entry</h1>
                        }
                    </>

                )}
            </Formik>
            )
        </>
    )
}

export default Leave