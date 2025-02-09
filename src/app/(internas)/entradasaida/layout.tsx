import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { SessionProvider } from "next-auth/react";
import DashboardLayoutBasic from "@/components/template/TemaPrincipal";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    redirect('/entrar');
  }else if(!session?.empresa){
    redirect('/entrar_empresa');
  }

  return (
      <body >
        <SessionProvider>
          <div className="relative z-10">
            <DashboardLayoutBasic>
              {children}
            </DashboardLayoutBasic>
          </div>
        </SessionProvider>
      </body>

  );
}
