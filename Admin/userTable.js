import React, { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router';

const UserTable = () => {
    const [userData, setUserData] = useState([]);
    // console.log(userData.department.name)
    const navigate = useNavigate()
    const role = localStorage.getItem('role')
    // const departmentData = userData.map(data => data.department)
    // console.log(departmentData.map(value => value.name))
    const fetchData = async () => {
        try {
            const myToken = localStorage.getItem('token')
            const res = await axios.get("http://localhost:3001/employee/", {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer' + myToken
                }
            })
            setUserData(res.data.employee)
        } catch (err) {
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    const onDelete = async (id) => {
        await axios.delete(`http://localhost:3001/employee/${id}`)
        toast.success("User has been deleted", {
            position: toast.POSITION.TOP_CENTER,
            pauseOnFocusLoss: true
        })
        fetchData()
    }

    return (
        <>
            {role === 'admin' || role === 'employee' || role === 'HR' ?
                <>
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-gray-900">User Data</h1>
                        </div>
                    </header>
                    <br />
                    <div className=" justify-center items-center">
                        <div className="mx-8">
                            <div className="-my-2 overflow-x-auto min-w-full sm:-mx-6">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 ">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        First Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Last Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Email
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Phone No#
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Department
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Role
                                                    </th>
                                                    {role === 'admin' ?
                                                        <>
                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Edit
                                                            </th>
                                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Delete
                                                            </th>
                                                        </>
                                                        :
                                                        null
                                                    }
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {userData.map((data, index) => (
                                                    <tr
                                                        key={data._id}
                                                        id={index}
                                                    >
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="cursor-pointer text-gray-700 hover:bg-green-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium"
                                                                onClick={() => { navigate("/user-menu", { state: data }) }}
                                                            >
                                                                {data.fname}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">
                                                                {data.lname}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">
                                                                {data.email}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className='text-sm text-gray-500'>
                                                                {data.phone}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className='text-sm text-gray-500' >
                                                                {data.department.name}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className='text-sm text-gray-500'>
                                                                {data.role.name}
                                                            </div>
                                                        </td>
                                                        {role === 'admin' ?
                                                            <>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                    <EditIcon className="text-purple-400 cursor-pointer"
                                                                        onClick={() => { navigate("/editform", { state: { user: data } }) }} />
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                    <DeleteIcon className="text-dark hover:text-red-600 cursor-pointer" onClick={() => onDelete(data._id)} />
                                                                </td>
                                                            </>
                                                            :
                                                            null
                                                        }
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                navigate('/')
            }
        </>
    )
}

export default UserTable