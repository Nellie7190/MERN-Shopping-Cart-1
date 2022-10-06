

export default function OrderList({ orders }) {
  const orderListItem = orders.map(o => {
    <OrderListItem
      order={o}
      key={o._id}
    />
  })
}