// app/components/AuthButtons.tsx
"use client";

import { signIn, signOut } from "next-auth/react";

export function LoginButton() {
  return (
    <button onClick={() => signIn("github")} type="button">
      Login
    </button>
  );
}

export function LogoutButton() {
  return (
    <button onClick={() => signOut()} type="button">
      Logout
    </button>
  );
}
