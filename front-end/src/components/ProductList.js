import React, { useEffect } from 'react'

const ProductList=()=>{

    const [products,setProducts] = React.useState([])

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async ()=>{
        let result = await fetch('http://localhost:3000/products')
        result = await result.json()
        setProducts(result)
    }

    const deleteProduct = async(id)=>{
        let result = await fetch(`http://localhost:3000/product/${id}`,{
            method:"delete"
        })
        result = await result.json()
        if(result){
            
            alert(" product is deleted")
            getProducts()
        }
    }
    // console.warn("products",products)
    return(
        <div className='product-list'>
            <h3> Product List</h3>
            <ul>
                <li> S No</li>
                <li> Name</li>
                <li> Price</li>
                <li> Category</li>
                <li> Campany</li>
                <li> operation</li>
            </ul>
            {
                products.map((item,index)=>
                <ul key={item._id}>
                <li> {index +1}</li>
                <li> {item.name}</li>
                <li> {item.price}</li>
                <li> {item.category}</li>
                <li> {item.campany}</li>
                <li> <button onClick={()=>deleteProduct(item._id)}>Delete</button></li>
            </ul>
                )
            }
        </div>
    )
}

export default ProductList