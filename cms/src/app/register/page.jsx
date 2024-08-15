"use server";

import NavBar from "@/components/NavBar";
import { handleRegister } from "@/services/userService";
import Link from "next/link";

const RegisterPage = async () => {
  return (
    <main className="main">
      <div className="container">
        <h1 className="text-black py-2">Register</h1>

        <form action={handleRegister} className="form">
          <div className="flex gap-4">
            <div>
              <span>First Name</span>

              <input className="input" name="firstName" type="text" />
            </div>
            <div>
              <span>Last Name</span>

              <input className="input" name="lastName" type="text" />
            </div>
          </div>

          <div>
            <span>Email</span>

            <input className="input" name="email" type="text" />
          </div>

          <div>
            <span>Password</span>

            <input className="input" name="password" type="password" />
          </div>

          <input className="submit-btn" type="submit" value={"Submit"} />
        </form>

        <Link href={"/login"} className="text-blue-700">
          Login
        </Link>
      </div>
    </main>
  );
};

export default RegisterPage;
