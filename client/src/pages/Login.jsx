import { useState } from "react";
import bgImage from "../assets/images/School.png";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Google Login Success:", decoded);
    localStorage.setItem("googleUser", JSON.stringify(decoded));
    navigate("/student/dashboard");
  };

  const handleGoogleError = () => {
    console.error("Google Login Failed");
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <img
        src={bgImage}
        alt="School Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Login Box */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-lg p-6 sm:p-8 rounded-3xl w-[90%] max-w-[400px] shadow-2xl">
        <h2 className="text-2xl font-semibold text-center text-black mb-6">Portal Login</h2>

        {/* Username */}
        <label htmlFor="username" className="block text-md font-medium text-black">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-full mb-4 px-4 py-2 border border-gray-500 bg-white/80"
        />

        {/* Password */}
        <label htmlFor="password" className="block text-md font-medium text-black">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-full mb-5 px-4 py-2 border border-gray-500 bg-white/80"
        />

        {/* Microsoft Button - Smaller */}
        <div className="flex justify-center mb-2">
          <button className="w-[220px] rounded-md bg-white hover:bg-gray-100 text-black border border-gray-300 flex   gap-6 py-1.5 p-3">
            <img
              src="https://img.icons8.com/color/20/000000/microsoft.png"
              alt="Microsoft"
            />
            <span className="text-sm font-medium">Login with Microsoft</span>
          </button>
        </div>

        {/* Divider */}
        <div className="text-center font-medium text-black py-1">Or</div>

        {/* Google Button - Smaller */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            theme="outline"
            size="medium"
            shape="rectangular"
            width="220"
          />
        </div>
      </div>
    </div>
  );
}