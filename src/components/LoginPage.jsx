import React from "react";
import LoginForm from "./LoginForm";
import LoginInfoPanel from "./LoginInfoPanel";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left: Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-8 py-12">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>

      {/* Right: Branding / Info */}
      <div className="hidden lg:flex flex-1 bg-blue-600 text-white items-center justify-center p-12">
        <LoginInfoPanel />
      </div>
    </div>
  );
}
