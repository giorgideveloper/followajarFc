'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const navLinks = [
    {
        href: '/',
        name: 'მთავარი'
    },
    {
        href: '/about',
        name: 'პროექტის შესახებ'
    },
    {
        href: '/terms',
        name: 'წესები და პირობები'
    },
    {
        href: '/participants',
        name: 'მონაწილეები'
    },
    {
        href: '/register',
        name: 'რეგისტრაცია'
    },
    {
        href: '/contact',
        name: 'კონტაქტი'
    },
]

const Navbar = ({ metadata }: any) => {
    const router = useRouter()
    const pathname = usePathname()
    const [session, setSession] = useState<any>()

    const supabase = createClientComponentClient()


    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    useEffect(() => {
        supabase.auth.onAuthStateChange((_, sess) => {
            setSession(sess)
        })
    }, [])

    return (
        <div className={`navbar px-5 md:px-20 bg-base-100 shadow-sm font-arial-caps`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks.map((link, i) => {
                            const isActive = pathname.startsWith(link.href)

                            return (
                                <li key={`nav-mob-${i}`}>
                                    <Link
                                        className={` ${isActive ? 'text-blue' : 'text-black'}`}
                                        href={link.href}
                                        key={link.name}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Link href="/" className="">
                    <Image

                        alt=''
                        src={'/logo.png'}
                        width={90}
                        height={50}
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-10">
                    {navLinks.map((link, i) => {
                        const isActive = pathname == link.href

                        return (
                            <li key={`nav-${i}`}>
                                <Link
                                    className={`hover:!bg-none hover:scale-110 border-b-cyan-800  ${isActive ? 'text-base font-semibold border-b-2 rounded-none rounded-t-md' : 'text-base'}`}
                                    href={link.href}
                                    key={link.name}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    session ?
                        <>
                            <span className="font-arial text-gray-600">{metadata?.name} {metadata?.lastname}</span>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={`https://qncbnxbxcvvacstnmmdk.supabase.co/storage/v1/object/public/avatars/${metadata?.avatar_url}`} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link href='/profile'>პროფილი</Link>
                                    </li>
                                    <li>
                                        <button onClick={handleSignOut}>გასვლა</button>
                                    </li>
                                </ul>
                            </div>
                        </>
                        :
                        <a href="login" className="font-arial text-gray-600">შესვლა</a>
                }
            </div>
        </div>

    )
}

export default Navbar
