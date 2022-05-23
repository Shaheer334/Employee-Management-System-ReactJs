import React, { Component } from 'react'

class MoviesGenre extends Component {

    render() {
        return (
            <div className="font-sans  items-center justify-center bg-blue-darker ">
                <div class="overflow-hidden bg-white rounded max-w-xs w-40 shadow-lg  leading-normal">
                    <ul className="text-center">
                        <li class="px-4 py-2 bg-gray-400 border-b border-gray-200 w-40 rounded-t-lg dark:border-gray-600 font-bold text-lg">Movies Genre</li>
                        {this.props.listItem.map((val) => {
                            return <li class="px-4 py-2 border-b border-gray-200 w-40 rounded-t-lg dark:border-gray-600 cursor-pointer hover:text-red-400" onClick={() => this.props.listshow(val.name)}>{val.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MoviesGenre

