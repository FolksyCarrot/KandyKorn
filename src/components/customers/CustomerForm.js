import React, { useState } from "react"


export const CustomerForm = () => {

    const [customers, setCustomers] = useState({})
    

    const PostCustomer= (
        () => {
            const fetchOption = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(customers)
            }
            
            return fetch("http://localhost:8088/customers", fetchOption)
                
                
        }
    )

    return (
        <>
             <form className="employeeForm">
            <h2 className="employeeForm__title">New Customer</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        required= {true} autoFocus={true}
                        type="text"
                        className="form-control"
                        placeholder="Name of Customer"
                        onChange= {
                            (event) => {
                                const copy = {...customers}
                                copy.name = event.target.value
                                setCustomers(copy)

                                //this is updating the employees as the transient state
                            }

                        } />
                        <button className="btn btn-primary" onClick={PostCustomer}>
                Submit Customer
                        </button>   
                </div>
            </fieldset>
        </form>
        
        </>

    )
   
}