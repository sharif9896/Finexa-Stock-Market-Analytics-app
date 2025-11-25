import React, { useState } from "react";
import { BACKEND_URL } from "../../config";
// import {navigate} from 'useN'
// import "./auth.css";

const API = `${BACKEND_URL}auth`;

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  // const navigate = useNavigate();

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
      window.location.href = "http://localhost:5174/";
    }
  };

  return (
    <div className="container-fluid auth-container py-5">
      <div className="row justify-content-center align-items-center">
        {/* LEFT SIDE CONTENT */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="text-primary fw-bold">Invest Smart with Finexa</h2>
          <p>
            The stock market helps investors build wealth while companies grow
            using public capital. Before you start trading, keep these points in
            mind:
          </p>

          <ol>
            <li>Stock prices move based on supply & demand.</li>
            <li>Diversification reduces risk in investments.</li>
            <li>Equity delivery allows long-term wealth creation.</li>
            <li>Trading requires proper risk management & discipline.</li>
            <li>Always analyze company fundamentals before investing.</li>
          </ol>

          <p>
            Join Finexa today and take your first step toward financial freedom!
            🚀
          </p>
        </div>

        {/* RIGHT SIDE AUTH FORM */}
        <div className="col-md-4">
          <div className="auth-card p-4">
            <h3 className="text-center fw-bold mb-3">
              {isSignup ? "Create Account" : "Sign In"}
            </h3>

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

            <p className="text-center small">
              {isSignup ? "Already have an account?" : "New user?"}{" "}
              <span className="toggle-link" onClick={toggleMode}>
                {isSignup ? "Sign In" : "Create Account"}
              </span>
            </p>

            {msg && <div className="alert alert-info mt-3 p-2">{msg}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
