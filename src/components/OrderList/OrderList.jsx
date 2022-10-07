import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList({ orders }) {
  // console.log(orders)
  const orderListItem = orders.map(o => 
    // console.log(o)
    <OrderListItem
      order={o}
      key={o._id}
    />
  )

  return (
    <>
      <h1>This is the OrderList component</h1>
      {orderListItem}
    </>
  )
}