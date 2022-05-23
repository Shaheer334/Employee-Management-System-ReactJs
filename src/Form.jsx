// import React, { Component } from "react";
// import { movies } from "./movies";

// class Form extends Component {
//     constructor() {
//         super()
//         this.state = {
//             movieName: movies
//         }
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//         const objecData = {
//             _id: "12345678",
//             title: e.target.title.value,
//             genre: { _id: "1234", name: e.target.genre.value },
//             numberInStock: e.target.stock.value,
//             dailyRentalRate: e.target.dailyRentalRate.value
//         }
//         console.log(objecData)
//         this.setState(prevState => ({
//             movieName: [...prevState.movieName, objecData]
//         }))
//     }

//     render() {
//         return (
//             <div className="grid grid-cols-6">
//                 <div className="col-start-1 col-end-3 mx-10">
//                     <form className=" max-w-lg w-full mx-48 my-24 " onSubmit={this.handleSubmit}>
//                         <div className="flex flex-wrap -mx-3 mb-6">
//                             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//                                     Title
//                                 </label>
//                                 <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"
//                                     name="title"
//                                 />
//                             </div>
//                             <div className="w-full md:w-1/2 px-3">
//                                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name"
//                                 >
//                                     Movie Name
//                                 </label>
//                                 <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"
//                                     name="genre"
//                                 />
//                             </div>
//                         </div>
//                         <div className="flex flex-wrap -mx-3 mb-6">
//                             <div className="w-full px-3">
//                                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
//                                     Stock
//                                 </label>
//                                 <input name="stock" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Enter Stock" />
//                             </div>
//                         </div>
//                         <div className="flex flex-wrap -mx-3 mb-2">
//                             <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
//                                     Rate
//                                 </label>
//                                 <input name="dailyRentalRate" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
//                             </div>
//                             <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
//                                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
//                                 </label>
//                                 <input type="submit" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" />
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//                 <div className="col-start-4 col-end-7 mx-10">

//                     <tbody className="bg-white divide-y divide-gray-200">
//                         {this.state.movieName.map((val) => {
//                             return (<tr key={val._id}>

//                                 <td className="px-6 py-4 whitespace-nowrap">
//                                     <div className="text-sm text-gray-900">{val.title}</div>

//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap">
//                                     <div className="text-sm text-gray-500">{val.genre.name}</div>

//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.numberInStock}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{val.dailyRentalRate}</td>
//                             </tr> )
//                         })}
//                     </tbody>
//                 </div>
//             </div>

//         );
//     }
// }

// export default Form;