import React, { useEffect, useState } from "react"

export const CustomerList = () => {
const [customers, getCustomers] = useState([])

useEffect(
    () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then((data) => {
                getCustomers(data)
            })
    }, []
)

    return(
        <>
            <h2>Customers</h2>
            <ul>

                {
                    customers.map(
                        (customer) => {
                            return <li key= {`customer--${customer.id}`}>{customer.name}</li>
                        }
                    )
                }

            </ul>
        </>
    )

}