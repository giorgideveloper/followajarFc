import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Image from "next/image"

const Page = async () => {
    const supabase = createServerComponentClient({ cookies })
    const res = await supabase.from('profiles').select('*')

    return (
        <div className="container mx-auto my-4 px-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <Image
                    src={`https://qncbnxbxcvvacstnmmdk.supabase.co/storage/v1/object/public/avatars/${avatar_url}`}
                    width={150}
                    height={150}
                    alt="Movie"
                    className="rounded-l-2xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name} {lastname}</h2>
                <div className="card-body"></div>
                <div className="card-actions justify-end">
                    <div className="grid grid-flow-col gap-4">
                        {fb && <a href={fb} target="_blank" className="m-auto"><img src="./fb3.svg" alt="" width={30} height={30} /></a>}
                        {yt && <a href={yt} target="_blank" className="m-auto"><img src="./yt1.svg" alt="" width={30} height={30} /></a>}
                        {ig && <a href={ig} target="_blank" className="m-auto"><img src="./ig.svg" alt="" width={25} height={25} /></a>}
                        {tk && <a href={tk} target="_blank" className="m-auto"><img src="./tk.svg" alt="" width={30} height={30} /></a>}
                    </div>
                </div>
            </div>
        </div>
    )
}