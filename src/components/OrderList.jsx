import React from 'react';

const OrderList = ({ orders }) => {
    const orderListItem = orders.map(o => {
        <orderListItem
            order={o}
            key={o._id}
        />
    })
  return (
    <>
        <h1>Blah</h1>
        {orderListItem}
    </>
  )
}

export default OrderList