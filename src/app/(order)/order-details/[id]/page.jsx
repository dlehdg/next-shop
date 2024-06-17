import React from 'react'

const OrderDetails = ({params, searchParams}) => {

  const {hello} = searchParams;
  const {id} = params;
  return (
    <div>

      <div>OrderDetails test {id} </div>
      <div>유저 이름 : {hello}</div>
    </div>
    
  )
}

export default OrderDetails