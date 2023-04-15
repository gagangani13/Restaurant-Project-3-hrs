import React,{useRef} from 'react'

const OrderForm = (props) => {
  const OrderIdRef=useRef()
  const PriceRef=useRef()
  const DishRef=useRef()
  const TableRef=useRef()
  function orderFilled(e) {
    e.preventDefault()
    const details={OrderId:OrderIdRef.current.value,Price:PriceRef.current.value,Dish:DishRef.current.value,Table:TableRef.current.value}
    console.log(details);
    props.onMainHome(details)
    localStorage.setItem(details.OrderId,JSON.stringify(details))
  }
  return (
    <div>
      <form onSubmit={orderFilled}>
        <label htmlFor='OrderId'>Unique Order Id</label>
        <input id='OrderId' type='number' ref={OrderIdRef}/>
        <label htmlFor='Price'>Choose Price</label>
        <input id='Price' type='number'  ref={PriceRef} />
        <label htmlFor='Dish'>Choose Dish</label>
        <input id='Dish' type='text'  ref={DishRef}/>
        <label htmlFor='Table'>Table</label>
        <select  ref={TableRef}>
            <option id='table1'>Table 1</option>
            <option id='table2'>Table 2</option>
            <option id='table3'>Table 3</option>
        </select>
        <button type='submit'>Add to List</button>
      </form>
    </div>
  )
}

export default OrderForm
