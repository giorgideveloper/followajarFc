'use client'

import RegisterForm from "@/components/Auth/RegisterForm"

export default function Auth() {

    return (
        <div className="w-full md:w-2/3 mx-auto p-6">
            <div className="w-full md:w-3/4 mx-auto p-6">
                <RegisterForm onSub={() => console.log()} />
            </div>
        </div>
    )
}