import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
    
    return (
        <ul className= "navBar_main">
            <li className="navbar_list">
                <Link className="navBar_link" to="/products">Products</Link>
            </li>

            <li className="navbar_list">
                <Link className ="navBar_link" to="/Locations">Locations</Link>
            </li>

            <li className="navbar_list">
                <Link className ="navBar_link" to="/employees">Employees</Link>
            </li>

            <li className="navbar_list">
                <Link className ="navBar_link" to="/employeeForm">EmployeeForm</Link>
            </li>

            <li className="navbar_list">
                <Link className ="navBar_link" to="/customers">Customers</Link>
            </li>

            <li className="navbar_list">
                <Link className ="navBar_link" to="/customersForm">Customers Form</Link>
            </li>

            
        </ul>

    )
  
}