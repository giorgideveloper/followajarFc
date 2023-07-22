'use client'

import RegisterForm from "@/components/Auth/RegisterForm"

export default function Auth() {

    return (
        <div className="w-full lg:w-3/4 mx-auto p-6">
            <div className="card w-full lg:w-2/3 bg-base-100 shadow-xl mx-auto mt-6">
                <div className="card-body">
                    <RegisterForm onSub={() => console.log()} />
                </div>
            </div>
        </div>
    )
}

