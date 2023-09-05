import React from "react";


const AddProduct=()=>{
    const[name,setName] = React.useState("")
    const[price,setPrice] = React.useState("")
    const[category,setCategory] = React.useState("")
    const[campany,setCampany] = React.useState("")
    const[error,setError] = React.useState(false)
    const addProduct = async()=>{

        console.warn(!name);
        if(!name || !price || !category || !campany){
            setError(true)
            return false;
        }
        

        console.warn(name,price,category,campany)
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId)
        let result = await fetch("http://localhost:3000/add-product",{
            method: 'post',
            body: JSON.stringify({name,price,category,campany,userId}),
            headers:{
                "content-Type":"application/json"
            }

        });
        result = await result.json()
        console.warn(result)

    }

    return(
        <div className="product">
            <h1> Add Product</h1>
            <input type="text" className="inputBox" placeholder="Enter Product Name" value={name} onChange={(e)=>{setName(e.target.value)}} / >
               { error && !name && <span className="invalid-input"> enter valid name</span>}
            <input type="text" className="inputBox" placeholder="Enter Product price" value={price} onChange={(e)=>{setPrice(e.target.value)}} / >
            { error && !price && <span className="invalid-input"> enter valid price</span>}

            <input type="text" className="inputBox" placeholder="Enter Product category" value={category} onChange={(e)=>{setCategory(e.target.value)}}/ >
            { error && !category && <span className="invalid-input"> enter valid category</span>}

            <input type="text" className="inputBox" placeholder="Enter Product campany" value={campany} onChange={(e)=>{setCampany(e.target.value)}} / >
            { error && !campany && <span className="invalid-input"> enter valid campany</span>}

                <button className="appButton" onClick={addProduct}> Add Product</button>

        </div>
    )
}

export default AddProduct;