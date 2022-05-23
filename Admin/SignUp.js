import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from 'yup'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const SignUpForm = () => {
    const [depart, setDepart] = useState([])
    const [rrole, setRrole] = useState([])
    const role = localStorage.getItem('role')
    const navigate = useNavigate()
    const singup = async (data) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer'
        };
        try {
            await axios.post("http://localhost:3001/employee/signup", data, { headers });
            toast.success("Account has been created", {
                position: toast.POSITION.TOP_CENTER
            })
        } catch (err) {
            const message = err.response.status
            if (message === 409) {
                toast.error("Account already registered", {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            if (message === 400) {
                toast.error('Please Enter Some Data', {
                    position: toast.POSITION.TOP_CENTER
                })
            }
        }
    }
    const gettDepartment = async () => {
        const res = await axios.get("http://localhost:3001/department")
        console.log(res)
        setDepart(res.data.department)
        // console.log(res.data.department.map(data => data.name))
    }
    useEffect(() => {
        gettDepartment()
    }, [])

    const getRrole = async () => {
        const res = await axios.get("http://localhost:3001/role")
        setRrole(res.data.data)
    }
    useEffect(() => {
        getRrole()
    }, [])
    console.log(depart)

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = Yup.object().shape({
        fname: Yup.string().required("This field is required").max(30).min(3),
        lname: Yup.string().required("This field is required").max(30).min(3),
        department: Yup.string().required("This field is required"),
        gender: Yup.string().required("This field is required"),
        role: Yup.string().required("This field is required"),
        phone: Yup.string().required("This field is required").matches(phoneRegExp, " Phone number is not valid").min(11).max(11),
        email: Yup.string().required("This field is required").email(),
        password: Yup.string().required("This field is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password must contain 8 characters, one Uppercase, one Lowercase, one Number and one special case character"),
    })
    return (
        <>
            <Formik initialValues={{ fname: "", lname: "", gender: "", department: "", role: "", phone: "", email: "", password: "" }}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    const departmentID = depart.filter((value) => {
                        if (value.name === values.department) {
                            return value._id
                        }
                    })
                    const roleID = rrole.filter((value) => {
                        if (value.name === values.role) {
                            return value._id
                        }
                    })
                    const objData = {
                        fname: values.fname,
                        lname: values.lname,
                        gender: values.gender,
                        department: departmentID[0]._id,
                        role: roleID[0]._id,
                        phone: values.phone,
                        email: values.email,
                        password: values.password,
                    }
                    singup(objData)
                    actions.resetForm()
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit
                }) => (
                    <form>
                        {role === 'admin' || role === 'employee' || role === 'HR' ?
                            <div className="py-3 max-h-full bg-gray-300">
                                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
                                    <div className="md:flex">
                                        {role === 'admin' ?
                                            <div className="w-full p-3 px-6 py-10">
                                                <div className="text-center">
                                                    <span className="text-xl text-gray-700">Add User</span>
                                                </div>
                                                <div className="mt-4 relative">
                                                    <label className=" p-1 bottom-8 ml-2 bg-white text-gray-400">First Name</label>
                                                    <input
                                                        type="text"
                                                        name="fname"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.fname}
                                                        className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                                                    <label className="error" style={{ color: "red" }}> {errors.fname && touched.fname && errors.fname}
                                                    </label>
                                                </div>
                                                <div className="mt-4 relative">
                                                    <label className=" p-1 bottom-8 ml-2 bg-white text-gray-400">Last Name</label>
                                                    <input
                                                        type="text"
                                                        name="lname"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.lname}
                                                        className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                                                    <label className="error" style={{ color: "red" }}> {errors.lname && touched.lname && errors.lname}
                                                    </label>
                                                </div>
                                                <div className="mt-4 relative">
                                                    <label htmlFor="genderlist" className=" p-1 bottom-8 ml-2 bg-white text-gray-400">Gender</label>
                                                    <input list="genders" className="form-control" id="genderlist" autoComplete="false"
                                                        type="text"
                                                        name="gender"
                                                        value={values.gender}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="error" style={{ color: "red" }}> {errors.gender && touched.gender && errors.gender}
                                                    </label>
                                                    <datalist id="genders" >
                                                        <option value={"Male"} />
                                                        <option value={"Female"} />
                                                    </datalist>
                                                </div>
                                                <div className="mt-4 relative">
                                                    <label htmlFor="departmentlist" className=" p-1 bottom-8 ml-2 bg-white text-gray-400">Department</label>
                                                    <input list="department" className="form-control" id="departmentlist" autoComplete="false"
                                                        type="text"
                                                        name="department"
                                                        value={values.department}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="error" style={{ color: "red" }}> {errors.department && touched.department && errors.department}
                                                    </label>
                                                    <datalist id="department" >
                                                        {depart.map((data) => (
                                                            <option key={data._id} value={data.name} />
                                                        ))}
                                                    </datalist>
                                                </div>
                                                <div className="mt-4 relative">
                                                    <label htmlFor="roles" className=" p-1 bottom-8 ml-2 bg-white text-gray-400">Role</label>
                                                    <input name='role' className="form-control" id="roles" list="role" autoComplete="false"
                                                        type="text"
                                                        value={values.role}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="error" style={{ color: "red" }}> {errors.role && touched.role && errors.role}
                                                    </label>
                                                    <datalist id="role" >
                                                        {rrole.map((data) => (
                                                            <option key={data._id} value={data.name} />
                                                        ))}
                                                    </datalist>
                                                </div>
                                                <div className="mt-4 relative">
                                                    <label className=" p-1 bottom-8 ml-2 bg-white text-gray-400">Cell Number</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.phone}
                                                        className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                                                    <label className="error" style={{ color: "red" }}> {errors.phone && touched.phone && errors.phone}
                                                    </label>
                                                </div>
                                                <div className="mt-4 relative">
                                                    <label className=" p-1 bottom-8 ml-2 bg-white text-gray-400">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                        className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                                                    <label className="error" style={{ color: "red" }}> {errors.email && touched.email && errors.email}
                                                    </label>
                                                </div>
                                                <div className="mt-4 relative">
                                                    <label className="p-1 bottom-8 ml-2 bg-white text-gray-400 ">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password}
                                                        className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                                                    <label className="error" style={{ color: "red" }}> {errors.password && touched.password && errors.password}
                                                    </label>
                                                </div>
                                                <div className="mt-4">
                                                    <button type="submit" onClick={handleSubmit} className="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700">
                                                        Sign Up
                                                    </button>
                                                </div>
                                            </div>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            navigate('/')
                        }
                    </form>
                )}
            </Formik>
        </>
    )
}

export default SignUpForm