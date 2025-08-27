import { ReactNode } from "react";
import AuthHeader from "@/components/layouts/AuthHeader";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('assets/hero-1.jpg')`,
          }}
        >
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md">
            <AuthHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
