import React, { useRef } from 'react'

const ProductForm = (props) => {
    const ProductIdRef=useRef()
    const PriceRef=useRef()
    const NameRef=useRef()
    const CategoryRef=useRef()
    function formSubmission(e) {
        e.preventDefault();
        if(ProductIdRef.current.value in localStorage){
            alert('Product Id exists!!')
        }else{
            const details={
                Id:ProductIdRef.current.value,
                Price:PriceRef.current.value,
                Name:NameRef.current.value,
                Category:CategoryRef.current.value
            }
            localStorage.setItem(details.Id,JSON.stringify(details))
            props.onScreen(details)
            ProductIdRef.current.value=+ProductIdRef.current.value+1
            PriceRef.current.value=''
            CategoryRef.current.value=''
        }
        
    }
    return (
        <form onSubmit={formSubmission}>
            <label htmlFor='Id'>Product Id</label>
            <input type='number' id='Id' required ref={ProductIdRef}/>
            <label htmlFor='Price'>Selling Price</label>
            <input type='number' id='Price' required ref={PriceRef}/>
            <label htmlFor='Name'>Product Name</label>
            <input type='text' id='Name' required ref={NameRef}/>
            <label htmlFor='Category'>Category</label>
            <select id='Category' required ref={CategoryRef}>
                <option>SkinCare</option>
                <option>Electronics</option>
                <option>Food</option>
            </select>
            <button>Add Product</button>
        </form>
    )
}

export default ProductForm
