import React from 'react'
import { Routes, Route } from 'react-router'
import LoginForm from './components/EMS/Login'
import SignUpForm from './components/EMS/Admin/SignUp'
import EditForm from './components/EMS/Admin/EditForm'
import UserTable from './components/EMS/Admin/userTable'
import Nav from './components/EMS/Dashboard/Nav'
import UpdatePassword from './components/EMS/Admin/UpdatePassword'
import ForgetPass from './components/EMS/Admin/ForgetPass'
import VerifyPass from './components/EMS/Admin/VerifyPass'
import  Menu  from './components/EMS/Admin/Menu/Menu'
import Leave from './components/EMS/Admin/Menu/Leave'
import ShowLeave from './components/EMS/Admin/Menu/ShowLeave'
import Qualification from './components/EMS/Admin/Menu/Qualification'
import ShowQualification from './components/EMS/Admin/Menu/ShowQualification'
import Salary from './components/EMS/Admin/Menu/Salary'
import ShowSalary from './components/EMS/Admin/Menu/ShowSalary'
import Payroll from './components/EMS/Admin/Menu/Payroll'
import ShowPayroll from './components/EMS/Admin/Menu/ShowPayroll'

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<UserTable />} />
        <Route path="/editform" element={<EditForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/updatepass" element={<UpdatePassword />} />
        <Route path="/forgetpassword" element={<ForgetPass />} />
        <Route path="/verifypassword" element={<VerifyPass />} />
        <Route path="/user-menu" element={<Menu />} />
        <Route path="/user-menu/leave" element={<Leave />} />
        <Route path="/user-menu/show-leave" element={<ShowLeave />} />
        <Route path="/user-menu/add-qualification" element={<Qualification />} />
        <Route path="/user-menu/show-qualification" element={<ShowQualification />} />
        <Route path="/user-menu/add-salary" element={<Salary />} />
        <Route path="/user-menu/show-salary" element={<ShowSalary />} />
        <Route path="/user-menu/add-payroll" element={<Payroll />} />
        <Route path="/user-menu/show-payroll" element={<ShowPayroll />} />
        <Route path="*" element={<LoginForm />} />
      </Routes>

    </>
  )
}

export default App