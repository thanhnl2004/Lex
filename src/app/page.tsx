import Link from "next/link";

import { api } from "@/trpc/server";
import { createClient } from "@/lib/supabase/server";
import { AuthButton } from "./components/auth-button";

export default async function Home() {
  const hello = await api.hello.hello({ text: "from tRPC" });
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  void api.hello.hello.prefetch({ text: "Hello" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">

        {/* Auth Section */}
        <div className="flex flex-col items-center gap-4">
          {user ? (
            <p className="text-xl">Welcome, {user.email}!</p>
          ) : (
            <p className="text-xl">Sign in to start planning your trips</p>
          )}
          <AuthButton user={user} />
        </div>
      </div>
    </main>
  );
}
