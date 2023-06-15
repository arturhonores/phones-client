import React, { useEffect, useState } from "react";
import phoneService from "../services/phone.services";
import IconDetails from "../components/IconDetails"

const Modal = ({ phoneId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [phoneDetails, setPhoneDetails] = useState(null)

    useEffect(() => {
        if (isOpen) {
            phoneService
                .getPhone(phoneId)
                .then(response => setPhoneDetails(response.data))
                .catch(err => console.log(err))
        }

    }, [isOpen, phoneId])

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button className="btn bg-transparent border-none" onClick={toggleModal}><IconDetails></IconDetails></button>
            {isOpen && (
                <dialog id="my_modal_1" className={`modal modal-open ${isOpen ? 'modal-middle' : ''}`}>
                    <div className="modal-box">
                        {phoneDetails
                            ?
                            <div>
                                <h3 className="font-bold text-lg text-center py-4">{phoneDetails.name}</h3>
                                <div className="flex justify-center gap-x-8">
                                    <img src={`/phones/${phoneDetails.imageFileName}`} alt="" className="w-20" />
                                    <div className="flex gap-x-4">
                                        <div className="text-left">
                                            <p className="py-1">manufacturer:</p>
                                            <p className="py-1">color:</p>
                                            <p className="py-1">price:</p>
                                            <p className="py-1">screen:</p>
                                            <p className="py-1">processor:</p>
                                            <p className="py-1">ram:</p>
                                        </div>
                                        <div className="text-left">
                                            <p className="py-1">{phoneDetails.manufacturer}</p>
                                            <p className="py-1">{phoneDetails.color}</p>
                                            <p className="py-1">{phoneDetails.price}</p>
                                            <p className="py-1">{phoneDetails.screen}</p>
                                            <p className="py-1">{phoneDetails.processor}</p>
                                            <p className="py-1">{phoneDetails.ram}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            "loading"
                        }
                        <div className="modal-action">
                            <button className="btn" onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                    <div className="modal-backdrop" onClick={toggleModal}></div>
                </dialog>
            )}
        </>
    )
}

export default Modal;

