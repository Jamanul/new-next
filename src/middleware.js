import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const token = cookies(request).get("next-auth.session-token");
  //console.log(cookie)
  console.log(token);
  console.log(request.url);
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
  return NextResponse.next();
};
export const config = {
    matcher: ['/dashboard'],
  };
