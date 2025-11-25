import React, { useState } from "react";
import "./auth.css";
import { BACKEND_URL } from "../../config";

const API = `${BACKEND_URL}auth`;

export default function AuthForm() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const toggleMode = () => setIsSignup(!isSignup);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isSignup ? "/signup" : "/signin";

    const res = await fetch(API + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMsg(data.message);

    if (!isSignup && res.ok) {
      localStorage.setItem("token", data.token);
      alert("Login Successful!");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card p-4">
        <h2 className="text-center fw-bold mb-3">
          {isSignup ? "Create Account" : "Sign In"}
        </h2>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          )}

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button className="btn btn-primary w-100 mb-3">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-center cursor-pointer">
          {isSignup ? "Already have an account?" : "New user?"}{" "}
          <span className="toggle-link cursor-pointer" onClick={toggleMode}>
            {isSignup ? "Sign In" : "Create Account"}
          </span>
        </p>

        {msg && <div className="alert alert-info mt-3">{msg}</div>}
      </div>
    </div>
  );
}
