"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (!user) {
        router.push("/login");
      } else {
        setLoading(false);
      }

    });

    return () => unsubscribe();

  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Checking Login...
        </h1>
      </main>
    );
  }

  return <>{children}</>;
}