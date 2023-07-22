
import UpsertProfileForm from "@/components/Auth/UpsertProfileForm"
import Tabs from "@/components/Tabs"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { useState } from "react"


const Profile = async () => {
    const supabase = createServerComponentClient({ cookies })

    const { data: { session } } = await supabase.auth.getSession()

    if (!session) redirect('/')
    const userId = session.user.id

    let { data, error, status } = await supabase
        .from('profiles')
        .select(`*`)
        .eq('id', userId)
        .single()

    return (
        <div className="card w-full md:w-2/3 lg:w-2/3 bg-base-100 shadow-xl mx-auto mt-6">
            <div className="card-body">
                <Tabs>
                    <Tabs.Item label="პაკეტი">
                        See ya later, <em>Alligator</em>!
                    </Tabs.Item>
                    <Tabs.Item label="სქრინები">
                        See ya later, <em>Alligator</em>!
                    </Tabs.Item>
                    <Tabs.Item label="პროფილის რედაქტირება">
                        <UpsertProfileForm defaults={{ ...data }} />
                    </Tabs.Item>
                </Tabs>
            </div>
        </div>
    )
}

export default Profile