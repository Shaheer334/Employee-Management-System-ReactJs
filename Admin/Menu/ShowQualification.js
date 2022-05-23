import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { useLocation, useNavigate } from 'react-router'

const ShowQualification = () => {
    const [qualificationData, setQualificationData] = useState([])
    const { state } = useLocation()
    const navigate = useNavigate()
    const userData = state
    // console.log("Qualification user Props :", userData)
    const role = localStorage.getItem('role')
    const getQualification = async () => {
        const myToken = localStorage.getItem('token')
        const header = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer' + myToken
        }
        try {
            const res = await axios.get(`http://localhost:3001/qualification/${userData._id}`, { header })
            console.log("qualification res :",res.data)
            setQualificationData(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getQualification();
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
                                        <tr className='items-center justify-center'><th className='text-white px-6 py-2'>Employee Qualification Data</th></tr>
                                        <tr>
                                            <th className="px-6 py-2 text-xs text-white">
                                                Position
                                            </th>
                                            <th className="px-6 py-2 text-xs text-white">
                                                Requirements
                                            </th>
                                            <th className="px-6 py-2 text-xs text-white">
                                                Joining Date
                                            </th>
                                        </tr>
                                    </thead>
                                    {qualificationData.length !== 0 ?
                                        <tbody className="bg-white">
                                            {qualificationData.map((data) => (
                                                <tr className="whitespace-nowrap" key={data.qualification_id}>
                                                    <td className="px-6 py-4 text-sm text-gray-500 bg-gray-200">
                                                        {data.position}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900 bg-gray-200">
                                                        {data.requirements}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-900 bg-gray-200">
                                                        {data.date_in}
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

export default ShowQualification
