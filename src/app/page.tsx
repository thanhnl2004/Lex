import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SiteHeader } from "@/components/dashboard/site-header";
import { TripsContent } from "@/components/trip/trips-content";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { createClient } from "@/lib/supabase/server";
import { SignInButton } from "@/components/auth-button";

export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <SignInButton />
      </div>
    );
  }
  
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <TripsContent />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
