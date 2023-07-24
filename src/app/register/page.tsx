
import RegisterForm from "@/components/Auth/RegisterForm"
import { Metadata } from "next"
import { openGraphImage } from "../shared-metadata"

export const metadata: Metadata = {
    title: 'რეგისტრაცია',
    openGraph: {
        ...openGraphImage,
        title: 'რეგისტრაცია',
    },
}

export default function Page() {

    return (
        <div className="w-full lg:w-3/4 mx-auto p-6">
            <div className="card w-full lg:w-2/3 bg-base-100 shadow-xl mx-auto mt-6">
                <div className="card-body">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

