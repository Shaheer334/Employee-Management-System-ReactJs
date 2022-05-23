import React, { Component } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

class isLiked extends Component {
    render() {
        return (
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <ThumbUpIcon className={this.props.liked ? "text-indigo-600 cursor-pointer" : "text-black hover:text-indigo-600 cursor-pointer"} onClick={() => this.props.like(this.props.id)} />
            </td>
        );
    }
}

export default isLiked;