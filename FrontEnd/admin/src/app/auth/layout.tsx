// /app/auth/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Layout minimal pour les pages d'auth */}
        {children}
      </body>
    </html>
  );
}
