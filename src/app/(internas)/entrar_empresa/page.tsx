"use client";

import { useSession } from "next-auth/react";


export default  function Page() {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user?.nome} - {session?.empresa?.razao_social}
    </div>
  );
}
