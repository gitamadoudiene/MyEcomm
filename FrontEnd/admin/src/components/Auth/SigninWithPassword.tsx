"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SigninWithPassword() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard"); // Redirection personnalisée
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Erreur lors de la connexion.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2.5 block font-medium text-black dark:text-white"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Entrer votre email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-stroke bg-transparent py-3 px-5 text-black dark:text-white dark:border-form-strokedark focus:border-primary outline-none"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="mb-2.5 block font-medium text-black dark:text-white"
        >
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="••••••••"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-stroke bg-transparent py-3 px-5 text-black dark:text-white dark:border-form-strokedark focus:border-primary outline-none"
        />
      </div>

      {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

      <button
        type="submit"
        className="w-full rounded-lg bg-primary p-3 text-white transition hover:bg-opacity-90"
      >
        Connexion
      </button>
    </form>
  );
}
