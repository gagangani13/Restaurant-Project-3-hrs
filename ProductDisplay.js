import React from 'react'

const ProductDisplay = (props) => {
    function deleteProduct() {
        const deleteKey=props.Id
        props.deleteOnScreen(deleteKey)
    }
  return (
    <li>
      {props.Id}--{props.Name}--{props.Price}
      <button onClick={deleteProduct}>DELETE</button>
    </li>
  )
}

export default ProductDisplay
