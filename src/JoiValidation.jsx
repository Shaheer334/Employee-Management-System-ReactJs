// import React, { useState } from "react";
// import Joi from "joi-browser";
// function CustomerForm() {
//     const [customer, setCustomer] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         pin: 0,
//         birthdate: "",
//     });

//     const [errors, setErrors] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         pin: 0,
//         birthdate: "",
//     });
//     const schema = {
//         firstName: Joi.string().min(1).max(20).required(),
//         lastName: Joi.string().required(),
//         email: Joi.string().email().required(),
//         pin: Joi.number().min(1000).max(9999).required(),
//         birthdate: Joi.date().min("2001-01-01").required(),
//     };

//     const validateForm = (event) => {
//         event.preventDefault();
//         const result = Joi.validate(customer, schema, { abortEarly: false });
//         console.log(result);
//         const { error } = result;
//         if (!error) {
//             return null;
//         } else {
//             const errorData = {};
//             for (let item of error.details) {
//                 const name = item.path[0];
//                 const message = item.message;
//                 errorData[name] = message;
//             }
//             console.log(errors);
//             setErrors(errorData);
//             return errorData;
//         }
//     };

//     const handleSave = (event) => {
//         const { name, value } = event.target;
//         let errorData = { ...errors };
//         const errorMessage = validateProperty(event);
//         if (errorMessage) {
//             errorData[name] = errorMessage;
//         } else {
//             delete errorData[name];
//         }
//         let customerData = { ...customer };
//         customerData[name] = value;
//         setCustomer(customerData);
//         setErrors(errorData);
//     };

//     const validateProperty = (event) => {
//         const { name, value } = event.target;
//         const obj = { [name]: value };
//         const subSchema = { [name]: schema[name] }
//         const result = Joi.validate(obj, subSchema);
//         const { error } = result;
//         return error ? error.details[0].message : null;
//     };
//     const clearState = () => {
//         setCustomer({
//             firstName: "firstName",
//             lastName: "lastName",
//             email: "email",
//             pin: 0,
//             birthdate: "",
//         });
//     };
//     return (
//         <div>
//             <h3>Add Customer</h3>
//             <hr />
//             <form className="ui form">
//                 <div className="form-group">
//                     <label>First Name</label>
//                     <input
//                         type="text"
//                         name="firstName"
//                         className="form-control"
//                         value={customer.firstName}
//                         onChange={handleSave}
//                     />
//                 </div>
//                 {errors.firstName && (
//                     <div className="alert alert-danger">
//                         {errors.firstName}
//                     </div>
//                 )}
//                 <div className="form-group">
//                     <label>Last Name</label>
//                     <input
//                         type="text"
//                         name="lastName"
//                         className="form-control"
//                         value={customer.lastName}
//                         onChange={handleSave}
//                     />
//                 </div>
//                 {errors.lastName && (
//                     <div className="alert alert-danger">
//                         {errors.lastName}
//                     </div>
//                 )}
//                 <div className="form-group">
//                     <label>Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         className="form-control"
//                         value={customer.email}
//                         onChange={handleSave}
//                     />
//                 </div>
//                 {errors.email && (
//                     <div className="alert alert-danger">
//                         {errors.email}
//                     </div>
//                 )}
//                 <div className="form-group">
//                     <label>PIN</label>
//                     <input
//                         type="number"
//                         name="pin"
//                         className="form-control"
//                         value={customer.pin}
//                         onChange={handleSave}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Date of Birth</label>
//                     <input
//                         type="date"
//                         name="dob"
//                         className="form-control"
//                         value={customer.birthdate}
//                         onChange={handleSave}
//                     />
//                 </div>
//                 {errors.birthdate && (
//                     <div className="alert alert-danger">
//                         {errors.birthdate}
//                     </div>
//                 )}
//                 <div className="btn">
//                     <button
//                         type="submit"
//                         onClick={validateForm}
//                         className="btn btn-success"
//                     >
//                         Add customer
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default CustomerForm;
