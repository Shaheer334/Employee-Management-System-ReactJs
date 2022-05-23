import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Formik } from 'formik'

export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    showState = () => {
        console.log(this.state.data)
    }

    render() {
        return (
            <>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.password) errors.password = 'Required'

                        return errors;
                    }}
                    onSubmit={(values, actions) => {
                        this.setState({ data: values })
                        this.showState()
                        actions.resetForm()
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="h-screen bg-gray-300 px-3 py-16">
                                <div className="max-w-md mx-auto bg-white p-3 rounded">
                                    <div className="px-3 py-5">
                                        <div className="text-center">
                                            <h1 className="text-2xl mb-4">Signin</h1>
                                        </div>
                                        <div className="relative mb-3">
                                            <span className="ml-2 bg-white px-2 absolute -top-3 text-sm">Email</span>
                                            <input
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                className="transition duration-500 border h-12 rounded w-full px-2 mb-2" />
                                            {errors.email && touched.email && errors.email}
                                        </div>
                                        <div className="relative mb-1">
                                            <span className="ml-2 bg-white px-2 absolute -top-3 text-sm" >Password</span>
                                            <input
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                                className="transition duration-500 border h-12 rounded w-full px-2 mb-2" />
                                            {errors.password && touched.password && errors.password}
                                        </div>
                                        <div className="text-right mb-3">
                                            <Link to="/signup" type='submit' className="cursor-pointer text-blue-500 hover:text-blue-700 nav-item nav-link">
                                                Sign Up?
                                            </Link>
                                        </div>
                                        <button type="submit" disabled={isSubmitting}
                                            className="h-12 w-full hover:bg-red-800 focus:outline-none bg-red-700 rounded text-white mb-3">
                                            Signin
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </>
        )
    }
}
