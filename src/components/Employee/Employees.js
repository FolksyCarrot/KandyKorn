import React, { useEffect, useState } from 'react'

export const EmployeesList = () => {
const [employees, getEmployees] = useState([])

useEffect(
    () => {
        return fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then((data) => {
                getEmployees(data)
            })
    }, []
)


    return(
        <>
            <h2>Employees</h2>
            <ul key="EmployeeList">
        {
           employees.map (
               (employee) => {
                       return <li key ={`employee--${employee.id}`}> {employee.name} {employee.isManager? "true": "false"} {employee.hourlyRate}</li>
                    }
                )
        }
            </ul>
        </>
    )
}