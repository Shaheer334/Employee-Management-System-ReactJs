// import React, { Component } from 'react'
// import Table from './table'
// import { movies } from './movies'
// import { genres } from './genre'


// class Home extends Component {
//     constructor() {
//         super()
//         this.removeItem = this.removeItem.bind(this);
//         this.likedIcon = this.likedIcon.bind(this);
//         this.listShow = this.listShow.bind(this)
//         this.handleClick = this.handleClick.bind(this)
//         this.sortingPages = this.sortingPages.bind(this)
//         this.state = {
//             item: movies,
//             currentPage: 1,
//             dataPerPage: 3,
//             genre: genres
//         }
//     }
//     handleClick = (event) => {
//         this.setState({ currentPage: this.currentPage = event })
//     }

//     likedIcon = (id) => {
//         // console.log("clicked like")
//         this.setState(this.state.item.map((val) => {
//             if (val._id === id._id) {
//                 if (val.liked) {
//                     return val.liked = false
//                 }
//                 else {
//                     return val.liked = true
//                 }
//             }
//             return val.liked
//         }))
//     }
//     removeItem = (id) => {
//         this.setState({ item: this.state.item.filter((movieItem => movieItem._id !== id._id)) })
//     }
//     listShow = (name) => {
//         this.setState({ item: movies.filter((item) => item.genre.name === name) })
//     }
//     sortingPages = (data) => {
//         this.setState(
//             this.state.item.sort((moviesName1, moviesName2) => {
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

//     render() {
//         // const { item, currentPage, dataPerPage } = this.state

//         // displaying movies 
//         const indexOfLastMovie = this.state.currentPage * this.state.dataPerPage
//         const indexOfFirstMovie = indexOfLastMovie - this.state.dataPerPage
//         const currentMovies = this.state.item.slice(indexOfFirstMovie, indexOfLastMovie)
//         const pageNumbers = []
//         for (let i = 1; i <= Math.ceil(this.state.item.length / this.state.dataPerPage); i++) {
//             pageNumbers.push(i)
//         }
//         return (
//             <>
//                 <Table moviesData={this.state.item} removeItem={this.removeItem} like={this.likedIcon} liked={this.state.item} listgroup={this.state.genre}
//                     listshow={this.listShow} movi={movies} currentMovies={currentMovies} pageNumbers={pageNumbers} handleClick={this.handleClick}
//                     sortingPages={this.sortingPages}
//                 />

//             </>
//         )
//     }
// }

// export default Home