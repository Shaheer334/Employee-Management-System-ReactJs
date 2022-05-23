import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { useLocation, useNavigate } from 'react-router'

const ShowPayroll = () => {
    const [payrollData, setPayrollData] = useState([])
    const { state } = useLocation()
    const navigate = useNavigate()
    const role = localStorage.getItem('role')
    const userData = state
    // console.log("payroll show user Props :", userData)
    const getPayroll = async () => {
        const myToken = localStorage.getItem('token')
        const header = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer' + myToken
        }
        try {
            const res = await axios.get(`http://localhost:3001/payroll/${userData._id}`, { header })
            // console.log("payroll show res :", res.data.payrollDetails)
            setPayrollData(res.data.payrollDetails)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getPayroll();
    })
    // console.log("payroll data state :", payrollData)
    return (
        <>
            <div>
                <Menu />
            </div>
            {role === 'admin' || role === 'employee' || role === 'HR' ?
                <div className="container flex justify-center mx-auto rounded">
                    <div className="flex flex-col">
                        <div className="w-full">
                            <div className="border-b border-gray-200 shadow">
                                <table className='border-separate border border-gray-400 '>
                                    <thead className="bg-gray-700">
                                        <tr className='items-center justify-center'><th className='text-white px-6 py-2'>Employee Payroll Data</th></tr>
                                        <tr>
                                            <th className="px-6 py-2 text-xs text-white">
                                                Date
                                            </th>
                                            <th className="px-6 py-2 text-xs text-white">
                                                Report
                                            </th>
                                            <th className="px-6 py-2 text-xs text-white">
                                                Total Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    {payrollData.length !== 0 ?
                                        <tbody className="bg-white">
                                            {payrollData.map((data) => (
                                                <tr className="whitespace-nowrap" key={data.qpayroll_id}>
                                                    <td className="px-6 py-4 text-sm text-gray-500 bg-gray-200">
                                                        {data.date}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900 bg-gray-200">
                                                        {data.report}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900 bg-gray-200">
                                                        {data.total_amount}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        : "Nothing to show"
                                    }

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                :
                navigate('/')
            }
        </>
    )
}

export default ShowPayroll
