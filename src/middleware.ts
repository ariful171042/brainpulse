import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/terms",
    "/privacy",
    "/contact",
    "/quiz",
    "/api/webhooks(.*)",
  ],

  ignoredRoutes: ["/api/webhooks(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
