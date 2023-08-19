'use client'

import { FC } from "react"
import Letter from "./Letter"
import { Alphabet } from "./types"

interface AlphabetProps {
    links: Alphabet[]
}

const Alphabet: FC<AlphabetProps> = ({ links }) => {

    return (
        <>
            <h2 className={`text-center font-bold text-2xl lg:text-6xl m-20 mb-10 tracking-widest font-fira-go text-gray-900`}>გამომყევი აჭარაში</h2>
            <div className="card w-full bg-none">
                <div className="card-body text-center p-0 sm:p-4">
                    <div className="flex-row">
                        {links.slice(0, 5).map((item, index) => (
                            <Letter  {...item} key={index} />
                        ))}
                    </div>
                    <div className="flex-row">
                        {links.slice(5, 11).map((item, index) => (
                            <Letter  {...item} key={index} />
                        ))}
                    </div>
                    <div className="flex-row">
                        {links.slice(11, 16).map((item, index) => (
                            <Letter  {...item} key={index} />
                        ))}
                    </div>
                    <div className="flex-row">
                        {links.slice(16, 22).map((item, index) => (
                            <Letter  {...item} key={index} />
                        ))}
                    </div>
                    <div className="flex-row">
                        {links.slice(22, 27).map((item, index) => (
                            <Letter  {...item} key={index} />
                        ))}
                    </div>
                    <div className="flex-row">
                        {links.slice(27, 33).map((item, index) => (
                            <Letter  {...item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alphabet