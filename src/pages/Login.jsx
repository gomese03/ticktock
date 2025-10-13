import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // 🧪 Dummy authentication
    if (email === "admin@example.com" && password === "password123") {
      const fakeToken = "fake-jwt-token-12345";
      sessionStorage.setItem("authToken", fakeToken);
      navigate("/dashboard");
    } else {
      setError("Invalid credentials. Try admin@example.com / password123");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="flex-1 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-2xl font-semibold">Welcome back</h1>

            {error && (
              <div className="bg-red-100 text-red-600 px-3 py-2 rounded text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden lg:flex flex-1 bg-blue-600 text-white items-center justify-center p-12">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">ticktock</h2>
          <p className="text-white/90 leading-relaxed">
            Introducing ticktock, our cutting-edge timesheet web application
            designed to revolutionize how you manage employee work hours.
            With ticktock, you can effortlessly track and monitor employee
            attendance and productivity from anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
