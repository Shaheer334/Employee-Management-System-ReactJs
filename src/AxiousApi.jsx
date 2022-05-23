// import React, { Component } from "react";
// // import DeleteIcon from '@mui/icons-material/Delete';
// import axios from 'axios'
// class AxiousApi extends Component {
//     constructor(props) {
//         super()
//         this.state = {
//             posts: [],
//             currentPage: 1,
//             dataPerPage: 7
//         }
//     }

//     jsonPosts = async () => {
//         try {
//             const responseData = await axios.get('https://jsonplaceholder.typicode.com/posts')
//             this.setState({ posts: this.state.posts = responseData.data })
//             console.log(this.state.posts)

//         } catch (err) {
//             console.log(err)
//         }
//     }
//     postData = async () => {
//         const resposePost = await axios.post('https://jsonplaceholder.typicode.com/posts', this.state.posts)
//         console.log(resposePost)
//     }
//     postSubmit = (e) => {
//         e.preventDefault()
//         const objData = {
//             id: 11,
//             userId: 101,
//             title: e.target.title.value,
//             body: e.target.body.value
//         }
//         this.setState(prevState => ({
//             posts: [...prevState.posts, objData]
//         }))
//         this.postData()
//     }

//     componentDidMount() {
//         this.jsonPosts()
//     }
//     handleClick = (event) => {
//         this.setState({ currentPage: this.currentPage = event })
//     }
//     sortingPages = (data) => {
//         this.setState(
//             this.state.posts.sort((moviesName1, moviesName2) => {
//                 if (moviesName1[data] > moviesName2[data]) {
//                     return 1
//                 } if (moviesName1[data] < moviesName2[data]) {
//                     return -1
//                 }
//                 return 0
//             }
//             )
//         )
//     }
//     putPost = async () => {
//         const resPut = await axios.put(`https://jsonplaceholder.typicode.com/posts/${1}`)
//         console.log(resPut)
//     }
//     putSubmit = (e) => {
//         e.preventDefault()
//         const objData = {
//             id: 1,
//             userId: 1,
//             title: e.target.title.value,
//             body: e.target.body.value
//         }
//         this.setState(prevState => ({
//             posts: [...prevState.posts, objData]
//         }))
//         this.putPost()
//     }
//     deleteSubmit = async () => {
//         const resDel = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${1}`)
//         console.log(resDel)
//     }

//     render() {
//         const indexOfLastPost = this.state.currentPage * this.state.dataPerPage
//         const indexOfFirstPost = indexOfLastPost - this.state.dataPerPage
//         const currentPost = this.state.posts.slice(indexOfFirstPost, indexOfLastPost)
//         const pageNumbers = []
//         for (let i = 1; i <= Math.ceil(this.state.posts.length / this.state.dataPerPage); i++) {
//             pageNumbers.push(i)
//         }
//         return (
//             <>
//                 <div className="my-4 mx-4 md:w-2/6">
//                     <h1>Movies Rental App</h1>
//                     <p>Showing {this.state.posts.length} posts in the Database</p>
//                 </div>
//                 <div className="grid grid-cols-6">
//                     <div className="col-start-1 col-end-3 mx-10">
//                         <form className=" max-w-lg w-full mx-48 my-24 " onSubmit={this.putSubmit}>
//                             <div className="flex flex-wrap -mx-3 mb-6">
//                                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                                     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//                                         Title
//                                     </label>
//                                     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Add Title"
//                                         name="title"
//                                     />
//                                 </div>
//                                 <div className="w-full md:w-1/2 px-3">
//                                     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name"
//                                     >
//                                         Post
//                                     </label>
//                                     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Add Post"
//                                         name="body"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="flex flex-wrap -mx-3 mb-2">
//                                 <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
//                                     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
//                                         submit
//                                     </label>
//                                     <input type="submit" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
//                                 </div>
//                             </div>
//                         </form>
//                     </div>

//                     <div className="col-start-2 col-end-6 mx-10">
//                         <div className="-my-2 overflow-x-auto min-w-full sm:-mx-6">
//                             <div className="py-2 align-middle inline-block min-w-full sm:px-6 ">
//                                 <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//                                     <table className="min-w-full divide-y divide-gray-200">
//                                         <thead className="bg-gray-50">
//                                             <tr>

//                                                 <th
//                                                     scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-red-400"
//                                                     onClick={() => this.sortingPages('userId')}>
//                                                     User ID
//                                                 </th>
//                                                 <th
//                                                     scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                                                 >
//                                                     Title
//                                                 </th>
//                                                 <th
//                                                     scope="col"
//                                                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-red-400"
//                                                 >
//                                                     Post Body
//                                                 </th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="bg-white divide-y divide-gray-200">
//                                             {currentPost.map((data, index) => (
//                                                 <tr key={data.id}>

//                                                     <td className="px-6 py-4 whitespace-nowrap">
//                                                         <div className="text-sm text-gray-900">{data.userId}</div>

//                                                     </td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">
//                                                         <div className="text-sm text-gray-500">{data.title}</div>

//                                                     </td>
//                                                     <td className="px-6 py-4 whitespace-nowrap">
//                                                         <div className="text-sm text-gray-500">{data.body}</div>

//                                                     </td>
//                                                 </tr>
//                                             ))}

//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">

//                             <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//                                 <div>
//                                     <p className="text-sm text-gray-700">
//                                         Showing <span className="font-medium">1</span> to <span className="font-medium">{currentPost.length}</span> of {this.state.posts.length}
//                                         <span className="font-medium"></span> results
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//                                         {pageNumbers.map((num) => {
//                                             return (
//                                                 <i aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
//                                                     key={num}
//                                                     onClick={() => this.handleClick(num)}>
//                                                     {num}
//                                                 </i>
//                                             )
//                                         })}
//                                     </nav>
//                                 </div>
//                             </div>



//                         </div>
//                     </div>
//                 </div>


//             </>

//         );
//     }
// }
// export default AxiousApi