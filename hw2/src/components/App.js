import Greeting from "./Greeting";
import OrderStatus from "./OrderStatus";
import ShoppingList from "./ShoppingList";

function App() {
  const items = ["Milk", "Bread", "Eggs", "Cheese", "Butter"];

  const orders = [
    { orderId: "123", status: "Delivered" },
    { orderId: "456", status: "On the way" },
    { orderId: "789", status: "Awaiting shipment" },
  ];

  return (
    <div className="App">
      <h2>Task 1</h2>
      <Greeting name="Alex" />

      <h2>Task 2</h2>
      <h2>Shopping List</h2>
      <ShoppingList items={items} />

      <h2>Task 3</h2>
      <OrderStatus orders={orders} />
    </div>
  );
}

export default App;
