"use client";

import { useSignIn } from "@clerk/nextjs";
import { GoogleIcon } from "@/assets/icons";

export default function GoogleSigninButton({ text }: { text: string }) {
  const { signIn } = useSignIn();

  const handleGoogleSignIn = async () => {
    try {
      await signIn?.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/",
        redirectUrlComplete: "/",
        ...( {
          // 👇 Force Clerk à afficher le choix de compte Google
          prompt: "select_account"
        } as any ),
      });
    } catch (err) {
      console.error("Erreur lors de la connexion Google :", err);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray-2 p-[15px] font-medium hover:bg-opacity-50 dark:border-dark-3 dark:bg-dark-2 dark:hover:bg-opacity-50"
    >
      <GoogleIcon />
      {text} with Google
    </button>
  );
}
