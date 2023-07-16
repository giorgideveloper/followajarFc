'use client'

import { useEffect, useRef } from "react"

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const bluredVideoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        videoRef.current?.play()
        bluredVideoRef.current?.play()

    }, [])

    return (
        <div className="">
            {/* <video
                ref={bluredVideoRef}
                autoPlay
                controls={false}
                muted={true}
                src="./Ajara Tourist Alphabet.mp4"
                poster="https://vaibhav1663.github.io/Youtube-Ambient-Mode/poster.jpg"
                id="blurred"></video> */}

            <video
                ref={videoRef}
                className="shadow-2xl h-1/2"
                autoPlay
                muted={true}
                loop
                height={234}
                poster="th.jpeg"
            >
                <source src="./Ajara-Tourist-Alphabet.mp4" type="video/mp4"></source>
                <source src="./Ajara-Tourist-Alphabet.mp4" type="video/ogg" />
                {/* <source src="./Ajara-Tourist-Alphabet.webm" type="video/webm"></source> */}
            </video>

            {/* <video src="https://www.youtube.com/watch?v=qyTZLWNtf84"  width={500} height={300} autoPlay loop muted /> */}
        </div>
    )
}

export default Hero