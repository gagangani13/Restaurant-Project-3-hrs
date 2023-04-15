import React from 'react'

const OrderedDetails = (props) => {
    function onDelete(){
        const deleteKey=props.Id
        props.onDeleted(deleteKey)
        localStorage.removeItem(deleteKey)
    }
  return (
    <li>
        {props.Id}--{props.Dish}--{props.Price}--
        <button onClick={onDelete}>Delete Order</button>
    </li>
  )
}

export default OrderedDetails
