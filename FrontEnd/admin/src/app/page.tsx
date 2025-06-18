// /app/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await currentUser();

  // Si pas connecté → redirige vers sign-in
  if (!user) {
    redirect("/auth/sign-in");
  }

  // Sinon → redirige vers dashboard
  redirect("/dashboard");
}
