import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = true;
  // if (request.nextUrl.pathname.startsWith("/product"))
  //   if (!isLogin) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/about/:path*"],
};
