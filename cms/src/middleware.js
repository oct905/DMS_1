import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req) => {
    try {
        const url = new URL(req.url);
        const token = cookies().get("token")?.value;

        if (url.pathname === "/login" && token) {
            return NextResponse.redirect(new URL("/", req.url));
        }

        if (url.pathname === "/" && !token) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        return NextResponse.next();
    } catch (error) {
        console.log(error, `error`);
        return NextResponse.next();
    }
};
