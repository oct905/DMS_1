"use server";

import { handleLogin } from "@/services/userService";
import Link from "next/link";

const LoginPage = async ({ searchParams }) => {
  let msg;
  if (searchParams?.error) {
    msg = "Login Error";
  }
  return (
    <main className="main">
      <div className="container">
        <h1 className="text-black py-2">Login</h1>
        <form action={handleLogin} className="form">
          {msg ? (
            <>
              <span className=" animate-pulse text-red-700">{msg}</span>
            </>
          ) : null}
          <div className="">
            <span>Email</span>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input"
              autoComplete="off"
            />
          </div>
          <div>
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input"
            />
          </div>
          <div className="flex">
            <input type="submit" value={"Login"} className="submit-btn" />
          </div>
        </form>
        <Link href={"/register"} className="text-blue-700">
          Register
        </Link>
      </div>
    </main>
  );
};

export default LoginPage;
