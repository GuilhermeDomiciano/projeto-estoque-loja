'use server'

import {signIn} from '../../../../auth';

export default async function loginAction(formData: FormData){
    try {
        await signIn('credentials', formData);
    } catch (error) {   
        console.error(error);
    }
} 