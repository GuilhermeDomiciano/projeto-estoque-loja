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

<<<<<<< HEAD
  return (
  
      
      <body >
            <SessionProvider>
            <DashboardLayoutBasic>{children}</DashboardLayoutBasic>
            </SessionProvider>
=======
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await auth();
    const user = await getUser()
  
    if(!session){
      redirect('/login');
    }
  
    
  return (
    <html lang="en">
      <body>
      ID: {user?.id}
        {children}
>>>>>>> 3db7c439b5bc0302f02f66db789a6d83a6aad372
      </body>

  );
}
