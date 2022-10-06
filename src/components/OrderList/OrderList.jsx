import OrderListItem from "../OrderListItem/OrderListItem";

export default function OrderList({ orders }) {
  const orderListItem = orders.map(o => {
    <OrderListItem
      order={o}
      key={o._id}
    />
  })

  return (
    <main>
      <h1>DSJFKL:DJFSKLD</h1>
      {orderListItem}
    </main>
  )
}