import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class NavigationBar extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand" >Employee Management</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* <Link to="/" className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link> */}
                            <Link to="/axiousapi" className="nav-item nav-link active">Axious Api<span className="sr-only">(current)</span></Link>
                            <Link to="/form" className="nav-item nav-link">Add Movie</Link>
                            <Link to="/login" className="nav-item nav-link">Login</Link>
                            <Link to="/signup" className="nav-item nav-link">Sign up</Link>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavigationBar;