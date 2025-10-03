import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const count = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="p-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex justify-center gap-6">
        <Link to="/" className="hover:text-gray-300">
          404 - test
        </Link>
        <Link to="/store" className="hover:text-gray-300">
          Store
        </Link>
        <Link to="/profile-login" className="hover:text-gray-300">
          Profile/Login
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link to="/cart" className="hover:text-gray-300">
          Cart ({count})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
