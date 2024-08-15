// "use server";
"use client";
import { handleLogout } from "@/services/userService";
import Link from "next/link";
import { redirect } from "next/navigation";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="white-btn" href={"/"}>
        Home
      </Link>

      <button onClick={(e) => handleLogout()} className="white-btn">
        Logout
      </button>
    </div>
  );
};

export default NavBar;
