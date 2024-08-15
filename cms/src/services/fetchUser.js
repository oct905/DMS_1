"use server";

import { cookies } from "next/headers";

export const fetchData = async () => {
    // const response = await fetch("http://localhost:3000/users");
    const response = await fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${cookies().get("token")?.value}`,
        },
    });
    const responseJson = await response.json();
    const users = responseJson.users;
    if (users) {
        return users;
    }
    return "error";
}