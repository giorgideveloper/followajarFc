import { FC, useState } from "react";
import Modal from 'react-modal'
interface PlaceButtonProps {
    id: number
    title: string
    description: string
}

const PlaceButton: FC<PlaceButtonProps> = ({ id, title, description }) => {
    const [modal, setModal] = useState(false);

    function openModal() {
        setModal(!modal);
    }
    return (<>
        <a href={`#my_modal_${id}`} className="btn btn-neutral"
            onClick={openModal}
        >
            {title}
        </a>
        {/* The button to open modal */}
        {/* <a href={`#my_modal_${id}`} className="btn">open modal</a> */}
        {/* Put this part before </body> tag */}
        <div className="modal" id={`my_modal_${id}`}>
            <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                <div dangerouslySetInnerHTML={{ __html: description }} className='text-black' />
                <div className="modal-action">
                    <a href="#" className="btn">დახურვა</a>
                </div>
            </form>
        </div>
        {/* {modal ? (
            <section className="modal__bg bg-slate-300">
                <div className="modal__align">
                    <div className="modal__content"
                    // modal={modal}
                    >
                     
                        <div className="modal__video-align">
                            <div dangerouslySetInnerHTML={{ __html: description }} className='text-black' />
                        </div>
                    </div>
                </div>
            </section>
        ) : null} */}
    </>
    )
}

export default PlaceButton