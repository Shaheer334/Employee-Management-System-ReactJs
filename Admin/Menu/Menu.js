import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Menu = ({ fixed }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()
    const { state } = useLocation()
    const userData = state
    // console.log("Menu User :", userData)
    // console.log("role here:", role)
    return (
        <>
            <div className="flex flex-wrap py-2">
                <div className="w-full px-4">
                    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow rounded">
                        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                                <p className="text-sm font-bold justify-center items-center cursor-pointer leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase 
                                text-gray-600 no-underline hover:text-indigo-500">
                                    {/* {`${userData.fname} ${userData.lname}`} */} user data
                                </p>
                                <button
                                    className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    <i><MenuOpenIcon /></i>
                                </button>
                            </div>
                            <div
                                className={
                                    "lg:flex flex-grow items-center" +
                                    (menuOpen ? " flex" : " hidden")
                                }
                                id="example-navbar-info"
                            >
                                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                    <li className="nav-item">
                                        <p
                                            className="px-3 py-8 flex justify-center items-center cursor-pointer text-xs uppercase font-bold leading-snug text-gray-600 no-underline hover:text-indigo-500"
                                            onClick={() => navigate('/user-menu/show-leave', { state: userData })}
                                        >
                                            Show Leave
                                        </p>
                                    </li>
                                    <li className="nav-item">
                                        <p
                                            className="px-3 py-8 flex justify-center items-center cursor-pointer text-xs uppercase font-bold leading-snug text-gray-600 no-underline hover:text-indigo-500"
                                            onClick={() => navigate('/user-menu/show-qualification', { state: userData })}
                                        >
                                            Show Qualification
                                        </p>
                                    </li>
                                    <li className="nav-item">
                                        <p
                                            className="px-3 py-8 flex justify-center items-center cursor-pointer text-xs uppercase font-bold leading-snug text-gray-600 no-underline hover:text-indigo-500"
                                            onClick={() => navigate('/user-menu/show-salary', { state: userData })}
                                        >
                                            Show Salary
                                        </p>
                                    </li>
                                    <li className="nav-item">
                                        <p
                                            className="px-3 py-8 flex justify-center items-center cursor-pointer text-xs uppercase font-bold leading-snug text-gray-600 no-underline hover:text-indigo-500"
                                            onClick={() => navigate('/user-menu/show-payroll', { state: userData })}
                                        >
                                            Show Payroll
                                        </p>
                                    </li>
                                        <>
                                            <li className="nav-item">
                                                <p
                                                    className="px-3 py-8 flex justify-center items-center cursor-pointer text-xs uppercase font-bold leading-snug text-gray-600 no-underline hover:text-indigo-500"
                                                    onClick={() => navigate("/user-menu/leave", { state: userData })}
                                                >
                                                    Add Leave
                                                </p>
                                            </li>
                                            <li className="nav-item">
                                                <p
                                                    className="px-3 py-8 flex justify-center items-center cursor-pointer text-xs uppercase font-bold leading-snug text-gray-600 no-underline hover:text-indigo-500"
                                                    onClick={() => navigate("/user-menu/add-qualification", { state: userData })}
                                                >
                                                    Add Qualification
                                                </p>
                                        </li>
                                        <li className="nav-item">
                                            <p
                                                className="px-3 py-8 flex justify-center items-center cursor-pointer text-xs uppercase font-bold leading-snug text-gray-600 no-underline hover:text-indigo-500"
                                                onClick={() => navigate("/user-menu/add-salary", { state: userData })}
                                            >
                                                Add Salary
                                            </p>
                                        </li>
                                        <li className="nav-item">
                                            <p
                                                className="px-3 py-8 flex justify-center items-center cursor-pointer text-xs uppercase font-bold leading-snug text-gray-600 no-underline hover:text-indigo-500"
                                                onClick={() => navigate("/user-menu/add-payroll", { state: userData })}
                                            >
                                                Add Payroll
                                            </p>
                                        </li>
                                        </>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Menu



