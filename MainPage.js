import React,{useState} from 'react'
import ProductDisplay from "./ProductDisplay"
import ProductForm from "./ProductForm"
const MainPage = () => {
    const [oldDetails,updateDetails]=useState([])
    function inScreen(details){
        updateDetails([...oldDetails,details])
    }
    function deleteProduct(deleteKey) {
        localStorage.removeItem(deleteKey)
        updateDetails(oldDetails.filter((item)=>{
            return item.Id!==deleteKey && item
        }))
    }
    return (
        <>
        <ProductForm onScreen={inScreen}/>
        <hr/>
        <h3>SkinCare Items</h3>
        {oldDetails.map((item)=>{
            return (item.Category==='SkinCare'&&<ProductDisplay Name={item.Name} Id={item.Id} Price={item.Price} deleteOnScreen={deleteProduct} />)
        })}
        <h3>Electronic Items</h3>
        {oldDetails.map((item)=>{
            return (item.Category==='Electronics'&&<ProductDisplay Name={item.Name} Id={item.Id} Price={item.Price} deleteOnScreen={deleteProduct} />)
        })}
        <h3>Food Items</h3>
        {oldDetails.map((item)=>{
            return (item.Category==='Food'&&<ProductDisplay Name={item.Name} Id={item.Id} Price={item.Price} deleteOnScreen={deleteProduct} />)
        })}
        </>
    )
}

export default MainPage
