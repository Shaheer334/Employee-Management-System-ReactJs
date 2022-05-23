import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { useLocation, useNavigate } from 'react-router'

const ShowSalary = () => {
    const [salaryData, setSalaryData] = useState([])
    const { state } = useLocation()
    const navigate = useNavigate()
    const role = localStorage.getItem('role')
    const userData = state
    const getSalary = async () => {
        const myToken = localStorage.getItem('token')
        const header = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer' + myToken
        }
        try {
            const res = await axios.get(`http://localhost:3001/salary/${userData._id}`, { header })
            setSalaryData(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getSalary();
    })

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
                                        <tr className='items-center justify-center'><th className='text-white px-6 py-2'>Employee Salary Data</th></tr>
                                        <tr>
                                            <th className="px-6 py-2 text-xs text-white">
                                                Amount
                                            </th>
                                            <th className="px-6 py-2 text-xs text-white">
                                                Annual
                                            </th>
                                            <th className="px-6 py-2 text-xs text-white">
                                                Bonus
                                            </th>
                                        </tr>
                                    </thead>
                                    {salaryData.length !== 0 ?
                                        <tbody className="bg-white">
                                            {salaryData.map((data) => (
                                                <tr className="whitespace-nowrap" key={data._id}>
                                                    <td className="px-6 py-4 text-sm text-gray-500 bg-gray-200">
                                                        {data.amount}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900 bg-gray-200">
                                                        {data.annual}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900 bg-gray-200">
                                                        {data.bonus}
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

export default ShowSalary
