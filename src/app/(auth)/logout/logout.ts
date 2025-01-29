'use server'

import { signOut } from "../../../../auth";

export default async function loginAction(){
        await signOut();
}