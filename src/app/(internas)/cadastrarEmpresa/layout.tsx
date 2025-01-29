import { redirect } from "next/navigation";
import { auth } from "../../../../auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await auth();
  
    if(!session){
      redirect('/login');
    }
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
