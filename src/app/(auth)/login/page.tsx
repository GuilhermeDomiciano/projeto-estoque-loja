
import Login from "@/app/components/login/login";

import { auth } from "../../../../auth";
import { redirect } from "next/navigation";


export default async function Home() {

  
 

  const session = await auth();

  if(session){
    return redirect('/dashboard');
  }else{

  return (
    <div>
      <Login />

    </div>
  );
}
}
