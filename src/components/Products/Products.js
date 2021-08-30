import { useEffect, useState } from "react"


export const Products = () => {
    const [storeProducts, getProducts] = useState([])


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
                            return <div key={`product--${product.id}`}>We have {product.name}, which is a {product.productType.name}!</div>
                        }

                    )
                }
            </>
        )

}