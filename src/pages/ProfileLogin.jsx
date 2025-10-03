import { useNavigate } from "react-router-dom";

function ProfileLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/store");
  };

  return (
    <div className="flex flex-col items-center justify-center h-80 max-w-4xl mx-auto text-center">
      <h1 className="text-2xl font-bold">Login Page</h1>
      <button
        onClick={handleLogin}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
}

export default ProfileLogin;
