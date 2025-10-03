import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const roundedTotal = total.toFixed(2);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y">
            {items.map((item) => (
              <li
                key={item.title}
                className="flex items-center justify-between border-b py-2"
              >
                <span className="flex-1 truncate pr-4">
                  {item.title} (x{item.qty})
                </span>
                <span className="w-24 text-center font-semibold">
                  ${item.price * item.qty}
                </span>
                <button
                  onClick={() => dispatch(removeFromCart(item.title))}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${roundedTotal}</span>
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
