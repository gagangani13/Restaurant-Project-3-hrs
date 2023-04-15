import React,{useRef} from 'react'

const OrderForm = (props) => {
  const OrderIdRef=useRef()
  const PriceRef=useRef()
  const DishRef=useRef()
  const TableRef=useRef()
  function orderFilled(e) {
    e.preventDefault()
    if(OrderIdRef.current.value in localStorage){
      alert('Order placed for this Id')
    }else{
      const details={OrderId:OrderIdRef.current.value,Price:PriceRef.current.value,Dish:DishRef.current.value,Table:TableRef.current.value}
      props.onMainHome(details)
      localStorage.setItem(details.OrderId,JSON.stringify(details))
      OrderIdRef.current.value=+OrderIdRef.current.value+1
      PriceRef.current.value=''
      DishRef.current.value=''
    }
    
  }
  return (
    <div>
      <form onSubmit={orderFilled}>
        <label htmlFor='OrderId'>Unique Order Id</label>
        <input id='OrderId' type='number' required ref={OrderIdRef}/>
        <label htmlFor='Price'>Choose Price</label>
        <input id='Price' type='number' required ref={PriceRef} />
        <label htmlFor='Dish'>Choose Dish</label>
        <input id='Dish' type='text' required ref={DishRef}/>
        <label htmlFor='Table'>Table</label>
        <select  ref={TableRef}>
            <option>Table 1</option>
            <option>Table 2</option>
            <option>Table 3</option>
        </select>
        <button type='submit'>Add to List</button>
      </form>
    </div>
  )
}

export default OrderForm
