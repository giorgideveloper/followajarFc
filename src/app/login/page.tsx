'use client'

import LoginForm from "@/components/Auth/LoginForm"
import RegisterForm from "@/components/Auth/RegisterForm"
import { redirect, useRouter } from "next/navigation"
import { useState } from "react"

export default function Auth() {
    const router = useRouter()
    const [status, setStatus] = useState('SIGNIN') //SIGNIN
    // const supabase = createClientComponentClient<Database>()

    return (
        <div className="w-full md:w-2/3 mx-auto p-6">
            {
                status === 'SIGNIN' ?
                    <div className="w-full md:w-1/2 mx-auto p-6">
                        <LoginForm setStatus={setStatus} onSub={() => router.replace('/')} />
                    </div>
                    :
                    <div className="w-full md:w-3/4 mx-auto p-6">
                        <RegisterForm setStatus={setStatus} onSub={() => console.log()} />
                    </div>
            }

        </div>
    )
}