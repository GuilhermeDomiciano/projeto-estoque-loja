import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { SessionProvider } from "next-auth/react";


// Layout do Dashboard com autenticação
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  console.log(session?.user);

  // Redireciona para login caso o usuário não esteja autenticado
  if (session?.user) {
    await redirect('/entrar_empresa');
  } 

  return (
      <body >
            <SessionProvider>
           {children}
            </SessionProvider>
      </body>

  );
}
