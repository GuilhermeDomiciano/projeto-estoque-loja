'use server'


import {signIn} from '../../../auth';

export default async function loginAction(formData: FormData){
    try {
         await signIn('user-login', formData);     
        
    } catch (error) {   
        console.error(error);
    }
} 
