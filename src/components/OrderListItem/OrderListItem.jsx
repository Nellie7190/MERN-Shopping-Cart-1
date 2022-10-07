import OrderDetail from "../OrderDetail/OrderDetail"

export default function OrderListItem({ order }) {

  return (
    <>
      <OrderDetail order={order} />
    </>

  )
}