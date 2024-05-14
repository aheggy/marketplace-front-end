import "./Product.css"
import { useState, useEffect } from "react"
import Product from "./Product"
import productData from "./ProductData"

const API = process.env.REACT_APP_API_URL


export default function Products(){


    const [products, setProducts] = useState([])


    // useEffect(() => {
    //     fetch("../../public/ProductData.json")
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then((data) => setProducts(data))
    //         .catch((error) => console.error("Error fetching products: ", error));
    // }, []);


    return (
        <div className="products">
            {productData.map((product) => {
                return <Product key={product.id} product={product}/>
            })}
        </div>
    )

}