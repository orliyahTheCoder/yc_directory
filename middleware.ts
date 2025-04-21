// middleware.ts
export { auth as middleware } from "@/auth";

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // applies to all pages except API, _next, and static files
};
