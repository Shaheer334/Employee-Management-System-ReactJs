import React, { Component } from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            user: []
        }
    }
    showState = () => {
        console.log(this.state.user)
    }
    Schema = Yup.object().shape({
        password: Yup.string().required("This field is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
        confirmpassword: Yup.string().when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
            )
        })
    })
    render() {
        return (
            <>
                <Formik initialValues={{ firstname: '', lastname: '', email: '', password: '', confirmpassword: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.firstname) {
                            errors.firstname = 'Required';
                        } else if (values.firstname.length > 15) {
                            errors.firstname = 'Must be 15 characters or less';
                        }

                        if (!values.lastname) {
                            errors.lastname = 'Required';
                        } else if (values.lastname.length > 20) {
                            errors.lastname = 'Must be 20 characters or less';
                        }
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, actions) => {
                        const obj = {
                            firstname: values.firstname,
                            lastname: values.lastname,
                            email: values.email,
                            password: values.password,
                            confirmpassword: values.confirmpassword
                        }
                        this.setState(preState => ({user: [...preState.user, obj]}));
                        this.showState();
                        actions.resetForm();
                        // alert(this.showState())
                    }}
                    validationSchema={this.Schema}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <div className="grid grid-cols-6">
                            <div className="col-start-1 col-end-4 mx-10">
                                <form onSubmit={handleSubmit}>
                                    <div className="py-20 max-h-full bg-gray-300 px-2 my-36">
                                        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
                                            <div className="md:flex">
                                                <div className="w-full p-3 px-6 py-10">
                                                    <div className="text-center">
                                                        <span className="text-xl text-gray-700">Sign-Up Form</span>
                                                    </div>
                                                    <div className="mt-3 relative">
                                                        <label className="p-1 bottom-8 ml-2 bg-white text-gray-400 ">First name</label>
                                                        <input
                                                            name="firstname"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.firstname}
                                                            type="text"
                                                            className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                                                        {errors.firstname ? <div>{errors.firstname}</div> : null}
                                                    </div>
                                                    <div className="mt-4 relative">
                                                        <label className="p-1 bottom-8 ml-2 bg-white text-gray-400">Last name</label>
                                                        <input
                                                            name="lastname"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.lastname}
                                                            type="text"
                                                            className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                                                        {errors.lastname ? <div>{errors.lastname}</div> : null}
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
                                                        {errors.email ? <div>{errors.email}</div> : null}
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
                                                        <label class="error" style={{ color: "red" }}>
                                                            {errors.password}
                                                        </label>
                                                    </div>
                                                    <div className="mt-4 relative">
                                                        <label className="p-1 bottom-8 ml-2 bg-white text-gray-400 ">Confirm Password</label>
                                                        <input
                                                            type="password"
                                                            name="confirmpassword"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.confirmpassword}
                                                            className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                                                        <span class="error" style={{ color: "red" }}>
                                                            {errors.confirmpassword}
                                                        </span>
                                                    </div>
                                                    <div className="mt-4">
                                                        <button type="submit" className="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700">
                                                            Sign Up
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-start-4 col-end-6 mx-10">
                                <div className="overflow-x-auto min-w-full sm:-mx-6 my-36 bg-gray-300">
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
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {this.state.user.map((data, index) => (
                                                        <tr key={index}>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-500">{data.firstname}</div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <div className="text-sm text-gray-500">{data.lastname}</div>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.email}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Formik>
            </>
        )
    }
}