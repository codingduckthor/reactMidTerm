import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Store from "./pages/Store";
import ProfileLogin from "./pages/ProfileLogin";
import About from "./pages/About";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/profile-login" element={<ProfileLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <h1 className="text-center mt-6 text-red-600">404 Not Found</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
