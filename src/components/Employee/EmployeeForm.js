import React from "react"
import { useState } from "react"


export const EmployeeForm = () => {
    const [employee, update] = useState({})
    

 const postEmployee = () => {
     const fetchOption = {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(employee)
     }
     
     return fetch("http://localhost:8088/employees",  fetchOption)
        //.then is for the redirect, such as directing back to the original page after they submit the form
        //  .then(() => {})
 }
    return (
        <>
             <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control"
                        placeholder="Name of Employee"
                        onChange= {
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                update(copy)

                                //this is updating the employees as the transient state
                            }

                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Store Id:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder= "Employee Location"
                        onChange= {
                            (event) => {
                                const copy = {...employee}
                                copy.storeId = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Position:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder= "Employee Position"
                        onChange= {
                            (event) => {
                                const copy = {...employee}
                                copy.position = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Manager:</label>
                    <input 
                        type="checkbox"
                        className="form-control"
                        placeholder= "Manager?"
                        onChange= {
                            (event) => {
                                const copy = {...employee}
                                copy.manager = event.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Fulltime:</label>
                    <input 
                        type="checkbox"
                        className="form-control"
                        placeholder= "FullTime?"
                        onChange= {
                            (event) => {
                                const copy = {...employee}
                                copy.fullTime = event.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly Rate:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder= "hourly Rate"
                        onChange= {
                            (event) => {
                                const copy = {...employee}
                                copy.hourlyRate = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={postEmployee}>
                Submit Employee
            </button>
        </form>
        
        </>

    )

}