import { SidebarProvider, SidebarTrigger } from "@/web-laundry/components/ui/sidebar";
import AppSidebar from "@/web-laundry/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
