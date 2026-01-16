import { createClient } from "@/lib/supabase/server";
import { SignInButton } from "@/components/auth-button";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    redirect("/documents");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Lex</h1>
        <p className="text-lg text-muted-foreground">
          AI-powered document editor
        </p>
        <SignInButton />
      </div>
    </div>
  );
}
