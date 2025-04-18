import React from "react";

const LoginPage = () => {
  return (
    <section className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded" />
        <button className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded">Login</button>
      </form>
      <p className="text-center mt-4">Don't have an account? <a href="/signup" className="text-rose-600">Sign up</a></p>
    </section>
  );
};

export default LoginPage;
