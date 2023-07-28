'use server'

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function sendResetLink(formData: any): Promise<{ status: number, message: string }> {
    try {
        const supabase = createServerComponentClient({ cookies })

        let { data, error } = await supabase.auth.resetPasswordForEmail(formData.email, {
            redirectTo: 'https://followajara.ge/auth/reset'
        })
        // console.log("Message sent: %s", data);
        return { status: 200, message: 'success' }
    } catch (error) {
        console.log(error);
        return { status: 200, message: 'error' }

    }
}