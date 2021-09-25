import React, { useEffect, useState } from "react"


export const Locations = () => {
    const [storeLocations, getStoreLocations] = useState([])

    useEffect( () => {
        fetch("http://localhost:8088/stores")
        .then (res => res.json())
        .then (
            (data) => getStoreLocations(data)
        )
    }, [])

    return (
        <>
        <h2>Store Locations</h2>
            {
                storeLocations.map(
                    (store) => {
                        return <div key={`store--${store.id}`}> {store.city} located at {store.address}</div>
                    }  
                )
            }
        
        </>
    )

}