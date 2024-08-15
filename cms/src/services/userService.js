"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleLogin = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const payload = {
        email,
        password,
    };

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const responseJson = await response.json();
    console.log(responseJson);

    const token = responseJson.token;

    if (!token) {
        redirect(`/login?error=${responseJson.status}`);
    }

    cookies().set("token", token);
    redirect("/");
}

export const handleRegister = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const lastName = formData.get("lastName");
    const firstName = formData.get("firstName");
    const payload = {
        email,
        password,
        lastName,
        firstName
    };

    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const responseJson = await response.json();
    const token = responseJson.token;

    if (!token) {
        redirect(`/login?error=${responseJson.status}`);
    }

    cookies().set("token", token);
    redirect("/login");
}

export const handleLogout = () => {
    cookies().get("token") && cookies().delete("token");
    redirect("/login");
}