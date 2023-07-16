'use client'

import { useState } from "react";
import { Alphabet } from "./types";

const Letter = ({ letter, src }: Alphabet) => {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

    const openModal = () => {
        setModal(!modal);
    };

    const spinner = () => {
        setVideoLoading(!videoLoading);
    };
    return (
        <button
            key={letter}
            onClick={openModal}
            className="py-2 px-3 sm:py-4 sm:px-4 md:py-5 md:px-5 lg:py-3 lg:px-10">
            <p className="font-medium text-3xl sm:text-4xl md:text-4xl lg:text-5xl p-1 hover:scale-125 transition-all text-gray-600">{letter}</p>
            {modal ? (
                <section className="modal__bg">
                    <div className="modal__align">
                        <div className="modal__content"
                            // modal={modal}
                        >
                            {/* <IoCloseOutline
                                            className="modal__close"
                                            arial-label="Close modal"
                                            onClick={setModal}
                                        /> */}
                            <div className="modal__video-align">
                                {videoLoading ? (
                                    <div className="modal__spinner">

                                        <span className="loading loading-spinner loading-lg"></span>
                                        {/* <BiLoaderAlt
                                                        className="modal__spinner-style"
                                                        fadeIn="none"
                                                    /> */}
                                    </div>
                                ) : null}
                                <iframe
                                    className="modal__video-style"
                                    onLoad={spinner}
                                    loading="lazy"
                                    width="800"
                                    height="500"
                                    src={src}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}
        </button>
    )
}


export default Letter