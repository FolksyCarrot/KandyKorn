import React, {useState, useEffect} from "react"

export const CustomerOrders = () => {
    const [orders, setOrders] = useState([])

    const fetchOrders = () => {
    
            return fetch("http://localhost:8088/purchases")
                .then(res => res.json())
                .then((data) => {
                    setOrders(data)
                })
    }

        useEffect(() => {
            fetchOrders()
        }, [])

    return (
        <>
        <h1>Customer Orders</h1>
        <ul>
            {
                orders.map(
                    (order) => {
                        return <li key={order.id}>You've purchased {order.productName}!</li>
                    }
                )
            }
        </ul>
        </>
    )
}