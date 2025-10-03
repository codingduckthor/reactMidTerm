import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import { addToCart } from "../redux/cartSlice";

function Store() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading")
    return <h2 className="text-center mt-4">Loading...</h2>;
  if (status === "failed")
    return <h2 className="text-center mt-4">Error loading products.</h2>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow rounded-lg p-4 flex flex-col items-center"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-32 object-cover rounded"
          />
          <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
          <button
            onClick={() =>
              dispatch(
                addToCart({ title: product.title, price: product.price })
              )
            }
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}

export default Store;
