import OrderForm from "./OrderForm";
import React, { useState } from "react";
import OrderedDetails from "./OrderedDetails";

const MainHome = () => {
  const [oldDetails, updateDetails] = useState([]);

  function fromOrderForm(details) {
    console.log(oldDetails);
    updateDetails([...oldDetails, details]);
  }

  function onDelete(deleteKey){
    console.log(oldDetails)
    const newDetails=oldDetails.map((item)=>{
        return item.OrderId!==deleteKey && item
    })
    updateDetails(newDetails)
  }
  return (
    <div>
      <OrderForm onMainHome={fromOrderForm} />
      <hr/>
      {/* {console.log(localStorage)} */}
      Table 1<br />
      {oldDetails.map((item) => {
        return (
          item.Table === "Table 1" && (
            <OrderedDetails
              Id={item.OrderId}
              Price={item.Price}
              Dish={item.Dish}
              onDeleted={onDelete}
            />
          )
        );
      })}<br />
      Table 2<br />
      {oldDetails.map((item) => {
        return (
          item.Table === "Table 2" && (
            <OrderedDetails
              Id={item.OrderId}
              Price={item.Price}
              Dish={item.Dish}
              onDeleted={onDelete}
            />
          )
        );
      })}<br />
      Table 3<br />
      {oldDetails.map((item) => {
        return (
          item.Table === "Table 3" && (
            <OrderedDetails
              Id={item.OrderId}
              Price={item.Price}
              Dish={item.Dish}
              onDeleted={onDelete}
            />
          )
        );
      })}
    </div>
  );
};

export default MainHome;
