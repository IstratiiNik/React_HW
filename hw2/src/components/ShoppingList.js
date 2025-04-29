function ShoppingList({ items }) {
  // Check if the items array is empty or undefined
  if (!items || items.length === 0) {
    return <p>The shopping list is empty.</p>;
  }

  return (
    <div className="ShoppingList">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
