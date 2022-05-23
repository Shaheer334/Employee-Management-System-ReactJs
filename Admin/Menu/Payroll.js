import React, { useEffect, useState } from 'react'
import { Formik } from "formik"
import { useLocation } from "react-router"
import * as Yup from 'yup'
import axios from "axios"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Menu from './Menu'

const Payroll = () => {
    const [totalSalary, setTotalSalary] = useState([])
    const { state } = useLocation()
    const data = state
    // console.log("Payroll Data :", data)
    const role = localStorage.getItem('role')
    const myToken = localStorage.getItem('token')
    const payrollData = async (data) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + myToken
        };
        try {
            const response = await axios.post("http://localhost:3001/payroll", data, { headers });
            // console.log("response data :", response)
            if (response.status === 201) {
                toast.success("Payroll Submitted Successfully", {
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
            report: Yup.string().required("Requirement is Required").max(255),
        }
    )
    const getSalaryData = async () => {
        try {
            const headers = {
                'Content-Type': 'application/json',
                Authentication: 'Bearer' + myToken
            }
            const res = await axios.get(`http://localhost:3001/salary/${data._id}`, { headers })
            setTotalSalary(res.data)
            // console.log("Payroll Salary :", res.data.map((data) => data.amount))
        } catch (err) {
            console.log(err)
        }

    }
    // console.log("useState total salary :", totalSalary)
    useEffect(() => {
        getSalaryData()
    }, [])
    const totalSalaryData = totalSalary.map((data) => {
        let amount = parseInt(data.amount)
        let bonus = parseInt(data.bonus)
        return (amount + bonus)
    })
    // console.log("user total Salary :", totalSalaryData)
    return (
        <>
            <Formik initialValues={{ date: "", report: ""}}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    const totalAmount = totalSalaryData[0]
                    const objData = {
                        employeeId: data._id,
                        date: values.date,
                        report: values.report,
                        total_amount: totalAmount,
                        salary: totalSalaryData
                    }
                    payrollData(objData)
                    // console.log("payroll data final: ", objData)
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
                                                <h1 className="text-2xl mb-4 text-red-400">Payroll Form</h1>
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
                                                <span className="ml-2 bg-white px-2 absolute -top-3 text-sm" >Report</span>
                                                <input
                                                    type="text"
                                                    name="report"
                                                    value={values.report}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    className="transition duration-500 border h-12 rounded w-full px-2 mb-2" />
                                                <label style={{ color: 'red' }}>{errors.report && touched.report && errors.report}</label>
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
        </>
    )
}

export default Payroll
