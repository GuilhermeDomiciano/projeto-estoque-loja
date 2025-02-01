"use client";

// import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default  function Page() {
  // const router = useRouter();
  const { data: session } = useSession();

  return (
    <div>
      {session?.user?.nome} - {session?.empresa?.razao_social}
    </div>
  );
}
