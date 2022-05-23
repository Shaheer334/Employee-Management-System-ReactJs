// import { Joi } from 'joi-browser'
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// export default class Login extends Component {
//     constructor() {
//         super()
//         this.state = {
//             accountLogin: { email: '', password: '' },
//             errors: {}
//         }
//     }
//     schema = {
//         email: Joi.string().required().label("Email Address"),
//         password: Joi.string().required().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//             "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//         ).label("Password")
//     }
//     validate = () => {
//         const abrpterly = { abortEarly: false }
//         const { error } = Joi.validate(this.state.accountLogin, this.schema, abrpterly)
//         if (!error) {
//             return null
//         }
//         const errors = {}
//         for (let item of error.details) errors[item.path[0]] = item.message
//         return errors
//     }
//     handleSubmit = (e) => {
//         e.preventdefault()
//         const errors = this.validate()
//         this.setState({ errors: errors || {} })
//         if (errors) return
//     }
//     handleChange = (e) => {
//         this.setState({ email: e.target.email.value, password: e.target.password.value })
//         console.log(this.state.accountLogin)
//         this.validate()
//     }
//     render() {
//         return (
//             <>
//                 <form onSubmit={this.handleSubmit}>
//                     <div className="h-screen bg-gray-300 px-3 py-16">
//                         <div className="max-w-md mx-auto bg-white p-3 rounded">
//                             <div className="px-3 py-5">
//                                 <div className="text-center">
//                                     <h1 className="text-2xl mb-4">Signin</h1>
//                                 </div>
//                                 <div className="relative mb-3">
//                                     <span className="ml-2 bg-white px-2 absolute -top-3 text-sm">Email</span>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={this.email}
//                                         onChange={this.handleChange}
//                                         className="transition duration-500 border h-12 rounded w-full px-2 mb-2" />
//                                 </div>
//                                 <div className="relative mb-1">
//                                     <span className="ml-2 bg-white px-2 absolute -top-3 text-sm" >Password</span>
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         value={this.password}
//                                         onChange={this.handleChange}
//                                         className="transition duration-500 border h-12 rounded w-full px-2 mb-2" />
//                                 </div>
//                                 <div className="text-right mb-3">
//                                     <Link to="/signup" className="cursor-pointer text-blue-500 hover:text-blue-700 nav-item nav-link">
//                                         Sign Up?
//                                     </Link>
//                                 </div>
//                                 <button type="submit"
//                                     className="h-12 w-full hover:bg-red-800 focus:outline-none bg-red-700 rounded text-white mb-3">
//                                     Signin
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>

//             </>
//         )
//     }
// }
