function OrderStatus({ orders }) {
  // Check if the orders array is empty or undefined
  if (!orders || orders.length === 0) {
    return <p>There are no orders to display.</p>;
  }

  return (
    <div className="OrderStatus">
      <ul>
        {orders.map((order) => (
          <li key={order.orderId}>
            Заказ #{order.orderId}: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderStatus;
