import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { getUser } from "../../../../lib/usuario";
import React from "react";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = await getUser();
  
  if(!session){
    redirect('/login');
  }
  
  return (
    <html lang="en">
      <body>
        {React.cloneElement(children as React.ReactElement, user)}
      </body>
    </html>
  );
}
