import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { SessionProvider } from "next-auth/react";
import DashboardLayoutSidebarHidden from '../../components/ui/Template'



export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  console.log(session?.user);

  if (!session?.user) {
    redirect('/entrar');
  } 

  return (
    <body>
      <SessionProvider session={session}>
    <DashboardLayoutSidebarHidden>
        {children}</DashboardLayoutSidebarHidden>

      </SessionProvider>
    </body>
  );
}
