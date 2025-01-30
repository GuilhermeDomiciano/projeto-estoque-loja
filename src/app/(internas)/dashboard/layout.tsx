import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { SessionProvider } from "next-auth/react";
import DashboardLayoutBasic from "@/app/components/ui/Navbar";

// Layout do Dashboard com autenticação
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  // Redireciona para login caso o usuário não esteja autenticado
  if (!session) {
    redirect('/login');
  }

  return (
  
      
      <body >
            <SessionProvider>
            <DashboardLayoutBasic>{children}</DashboardLayoutBasic>
            </SessionProvider>
      </body>

  );
}
