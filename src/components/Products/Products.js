import { useEffect, useState } from "react"


export const Products = () => {
    const [storeProducts, getProducts] = useState([])

    const postProducts = (object) => {
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }
        return fetch("http://localhost:8088/purchases",  fetchOption)
    }

    useEffect( 
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
            .then(res => res.json())
            .then(
                (data) => {
                    getProducts(data)
                }
            )


        },
        [])

        return(
            <>
            <h2>Products</h2> 
                {
                    storeProducts.map(
                        (product) => {
                            return <div key={`product--${product.id}`}>We have {product.name}, which is a {product.productType.name}!<button onClick = {
                                () => {
                                    const productObject = {
                                        customerId: parseInt(localStorage.getItem("kandy_customer")),
                                        productName: product.name,
                                        productId: product.id
                                    }
                                    postProducts(productObject)
                                }}>Purchase Item</button></div>
                        }

                    )
                }
            </>
        )

}