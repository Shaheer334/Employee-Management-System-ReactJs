import React, { useState, useEffect } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router';
import { toast } from "react-toastify";

const EditForm = () => {
    const [edit, setEdit] = useState([])
    const [getDept, setDept] = useState([])
    const [getRol, setRole] = useState([])
    const navigate = useNavigate()
    const { state } = useLocation()
    const role = localStorage.getItem('role')
    const userFormData = state.user

    console.log(edit)
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const schema = Yup.object().shape({
        fname: Yup.string().required("This field is required").max(30).min(3),
        lname: Yup.string().required("This field is required").max(30).min(3),
        gender: Yup.string().required("This field is required"),
        phone: Yup.string().required("This field is required").max(11).min(11).matches(phoneRegExp, "Phone Number is not valid"),
        department: Yup.string().required("This field is required"),
        role: Yup.string().required("This field is required")
    })
    const getRole = async () => {
        const res = await axios.get('http://localhost:3001/role')
        setRole(res.data.data)
    }
    useEffect(() => {
        getRole()
    }, [])

    const getDepartment = async () => {
        const res = await axios.get('http://localhost:3001/department/')
        setDept(res.data.department)
        // console.log("department : ", res.data.department)
    }
    useEffect(() => {
        getDepartment();
    }, [])

    const putData = async (data) => {
        await axios.put(`http://localhost:3001/employee/${data.id}`, data)
        toast.success("User data updated!", {
            position: toast.POSITION.TOP_CENTER
        })
        navigate('/dashboard')
    }

    return (
        <>
            <Formik initialValues={{ fname: userFormData.fname, lname: userFormData.lname, gender: userFormData.gender, phone: userFormData.phone, department: userFormData.department.name, role: userFormData.role.name }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    const gettingDepartment = getDept.filter((value) => {
                        if (value.name === values.department) {
                            return value._id
                        }
                    })
                    // console.log("department", gettingDepartment[0]._id)
                    const gettingRole = getRol.filter((value) => {
                        if (value.name === values.role) {
                            return value._id
                        }
                    })
                    // console.log("role", gettingRole[0]._id)
                    const objData = {
                        id: userFormData._id,
                        fname: values.fname,
                        lname: values.lname,
                        gender: values.gender,
                        phone: values.phone,
                        department: gettingDepartment[0]._id,
                        role: gettingRole[0]._id
                    }
                    setEdit(objData)
                    putData(objData)
                    actions.resetForm()
                }}

            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    touched,
                    handleBlur
                }) => (
                    <>
                        {role === 'admin' || role === 'employee' || role === 'HR' ?
                            <>
                                <div className=' my-12 mx-8'>
                                    <Link to="/dashboard" className='nav nav-link'><ArrowBackIcon /> Back</Link>
                                </div>

                                <div className=" mb-10 sm:mt-0 flex justify-center items-center">
                                    <div className="md:grid md:grid-cols-3 md:gap-6 right-0">
                                        <div className="mb-5 md:mt-0 md:col-span-2 right-0">
                                            <form>

                                                <div className="shadow overflow-hidden sm:rounded-md">
                                                    <div className="px-4 py-5 bg-white sm:p-6">
                                                        <div className="grid grid-cols-6 gap-6">
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Frist name</label>
                                                                <input type="text" id="first-name" autoComplete="given-name" className="mt-1 
                                                        focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    name="fname"
                                                                    value={values.fname}
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                />
                                                                <label className="error" style={{ color: "red" }}> {errors.fname && touched.fname && errors.fname}
                                                                </label>
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                                                <input type="text" id="last-name" autoComplete="given-name" className="mt-1 
                                                        focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    name="lname"
                                                                    value={values.lname}
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                />
                                                                <label className="error" style={{ color: "red" }}> {errors.lname && touched.lname && errors.lname}
                                                                </label>
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label htmlFor="phone-name" className="block text-sm font-medium text-gray-700">Phone</label>
                                                                <input type="tel" id="phone-name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 
                                                        focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    name="phone"
                                                                    value={values.phone}
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                />
                                                                <label className="error" style={{ color: "red" }}> {errors.phone && touched.phone && errors.phone}
                                                                </label>
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label htmlFor="genderlist" className="block text-sm font-medium text-gray-700">Gender</label>
                                                                <input type="text" autoComplete="off" id="genderlist" className="mt-1 focus:ring-indigo-500 
                                                        focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    name="gender"
                                                                    list="gender"
                                                                    value={values.gender}
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                />
                                                                <datalist id="gender" >
                                                                    <option value={"Male"} />
                                                                    <option value={"Female"} />
                                                                </datalist>
                                                                <label className="error" style={{ color: "red" }}> {errors.gender && touched.gender && errors.gender}
                                                                </label>
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label htmlFor="departmentlist" className="block text-sm font-medium text-gray-700">Department</label>
                                                                <input type="text" autoComplete="off" id="department" className="mt-1 focus:ring-indigo-500 
                                                        focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    name="department"
                                                                    list="departmentlist"
                                                                    value={values.department}
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                />
                                                                <datalist id="departmentlist" >
                                                                    {getDept.map((data) => (
                                                                        <option key={data._id} value={data.name} />
                                                                    ))}
                                                                </datalist>
                                                                <label className="error" style={{ color: "red" }}> {errors.department && touched.department && errors.department}
                                                                </label>
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <label htmlFor="rolelist" className="block text-sm font-medium text-gray-700">Role</label>
                                                                <input type="text" id="role" autoComplete="off" className="mt-1 focus:ring-indigo-500 
                                                        focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                    list="rolelist"
                                                                    name="role"
                                                                    value={values.role}
                                                                    onBlur={handleBlur}
                                                                    onChange={handleChange}
                                                                />
                                                                <datalist id="rolelist">
                                                                    {getRol.map((roleData) => (
                                                                        <option key={roleData._id} value={roleData.name} />
                                                                    ))}
                                                                </datalist>
                                                                <label className="error" style={{ color: "red" }}> {errors.role && touched.role && errors.role}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md 
                                                text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                            onClick={handleSubmit}
                                                        >
                                                            Update
                                                        </button>
                                                    </div>
                                                </div>

                                            </form>
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
            </Formik>
        </>
    )
}

export default EditForm