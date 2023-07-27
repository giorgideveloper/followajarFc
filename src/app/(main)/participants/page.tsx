import { openGraphImage } from "@/app/shared-metadata"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { Metadata } from "next"
import { cookies } from "next/headers"
import Image from "next/image"

export const metadata: Metadata = {
    title: 'მონაწილეები',
    openGraph: {
        ...openGraphImage,
        title: 'მონაწილეები',
    },
}


const Page = async () => {
    const supabase = createServerComponentClient({ cookies })
    const res = await supabase.from('profiles').select('*')



    const { data: users, error } = await supabase
        .from('users')
        .select('*')
        // .eq('active', true);

    console.log('users', users,error);

    return (
        <div className="container mx-auto my-4 px-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {res?.data?.map((item, i) =>
                    <UserCard {...item} key={i} />
                )}
            </div>
        </div>
    )

}

export default Page


const UserCard = ({ name, lastname, status, ig, fb, yt, tk, avatar_url }: any) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-full rounded-md">
                        <Image
                            className="rounded-md"
                            fill
                            src={`https://qncbnxbxcvvacstnmmdk.supabase.co/storage/v1/object/public/avatars/${avatar_url}`}
                            alt=""
                        />
                    </div>
                </div>
                <h2 className="card-title">{name} {lastname}</h2>
                <div className="divider m-0"></div>
                <div className="card-actions justify-end">
                    <div className="grid grid-flow-col gap-4">
                        {fb && <a href={fb} target="_blank" className="m-auto hover:scale-110 transition-all"><img src="./fb3.svg" alt="" width={30} height={30} /></a>}
                        {yt && <a href={yt} target="_blank" className="m-auto hover:scale-110 transition-all"><img src="./yt1.svg" alt="" width={30} height={30} /></a>}
                        {ig && <a href={ig} target="_blank" className="m-auto hover:scale-110 transition-all"><img src="./ig.svg" alt="" width={25} height={25} /></a>}
                        {tk && <a href={tk} target="_blank" className="m-auto hover:scale-110 transition-all"><img src="./tk.svg" alt="" width={30} height={30} /></a>}
                    </div>
                </div>
            </div>
        </div>
    )
}