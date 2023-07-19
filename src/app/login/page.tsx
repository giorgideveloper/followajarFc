'use client'

import LoginForm from "@/components/Auth/LoginForm"
import { useRouter } from "next/navigation"

export default function Auth() {
    const router = useRouter()
    return (
        <div className="w-full md:w-2/3 mx-auto p-6">
            <div className="w-full md:w-1/2 mx-auto p-6">
                <LoginForm onSub={() => router.replace('/')} />
            </div>
        </div>
    )
}