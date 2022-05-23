import React, { Component } from "react";
import IsLiked from "./isLiked";
import DeleteIcon from '@mui/icons-material/Delete';
import MoviesGenre from './MoviesGenre'
class Table extends Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <>
                <div className="my-4 mx-4 md:w-2/6">
                    <h1>Movies Rental App</h1>
                    <p>Showing {this.props.movi.length} movies in the Database</p>
                </div>
                <div className="grid grid-cols-6">
                    <div className="col-start-1 col-end-2 mx-10">
                        <MoviesGenre listItem={this.props.listgroup} listshow={this.props.listshow} moviesData={this.props.moviesData} />
                    </div>
                    <div className="col-start-2 col-end-6 mx-10">
                        <div className="-my-2 overflow-x-auto min-w-full sm:-mx-6">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 ">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr moviesData={this.props.moviesData}>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-red-400"
                                                    onClick={() => this.props.sortingPages('title')}
                                                >
                                                    Title
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Genre
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-red-400"
                                                    onClick={() => this.props.sortingPages('numberInStock')}
                                                >
                                                    stock
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-red-400"
                                                    onClick={() => this.props.sortingPages('dailyRentalRate')}
                                                >
                                                    Rate
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Like</span>
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Delete</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {this.props.currentMovies.map((data, index) => (
                                                <tr key={data._id}>

                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">{data.title}</div>

                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">{data.genre.name}</div>

                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.numberInStock}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{data.dailyRentalRate}</td>
                                                    <IsLiked like={this.props.like} id={data} liked={data.liked} />
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <DeleteIcon className="text-dark hover:text-red-600 cursor-pointer" onClick={() => this.props.removeItem(data)} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">

                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">1</span> to <span className="font-medium">{this.props.currentMovies.length}</span> of{' '}
                                        <span className="font-medium">{this.props.movi.length}</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        {this.props.pageNumbers.map((num) => {
                                            return (
                                                <i aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer"
                                                    key={num}
                                                    onClick={() => this.props.handleClick(num)}>
                                                    {num}
                                                </i>
                                            )
                                        })}
                                    </nav>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>


            </>

        );
    }
}
export default Table