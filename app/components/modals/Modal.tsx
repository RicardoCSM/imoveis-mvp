'use client';

import { Button } from "@material-tailwind/react";
import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel
}
) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [onClose, disabled]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();
    }, []);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }
        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div
                className="
                    justify-center
                    items-center
                    flex
                    overflow-x-hidden
                    overflow-y-auto
                    fixed
                    inset-0
                    z-50
                    outline-none
                    h-full
                    focus:outline-none
                    bg-gray-800/70
                "
            >
                <div
                    className="
                        relative 
                        w-full
                        md:w-4/6
                        lg:w-3/6
                        xl:w-2/5
                        my-6
                        mx-auto
                        h-4/5
                    "
                >
                    <div
                        className={`
                            translate
                            duration-300
                            h-full
                            ${showModal ? 'translate-y-0' : 'translate-y-full'}
                            ${showModal ? 'opacity-100' : 'opacity-0'}
                        `}
                    >
                        <div
                            className="
                                translate
                                h-full
                                border-0 
                                rounded-lg 
                                shadow-lg 
                                relative 
                                flex 
                                flex-col 
                                w-full 
                                bg-white
                                outline-none 
                                focus:outline-none
                            "
                        >
                            <div className="
                                flex
                                items-center
                                p-2 md:p-4
                                rounded-t
                                justify-center
                                relative
                                border-b-[1px]
                            "
                            >
                                <button
                                    onClick={handleClose}
                                    className="
                                        p-1
                                        border-0
                                        hover:opacity-80
                                        transition
                                        absolute
                                        left-9
                                    "
                                >
                                    <IoMdClose size={18} />
                                </button>
                                <div className="text-lg font-semibold">
                                    {title}
                                </div>
                            </div>

                            <div className="relative p-2 md:p-6 flex-auto">
                                {body}
                            </div>

                            <div className="flex flex-col gap-2 p-3">
                                <div className="
                                    flex
                                    flex-row
                                    justify-center
                                    items-center
                                    gap-4
                                    w-full
                                ">
                                    {secondaryAction && secondaryActionLabel && (
                                        <Button onClick={handleSecondaryAction} placeholder={secondaryActionLabel} variant="text" size="md" color="gray">
                                            <span>{secondaryActionLabel}</span>
                                        </Button>
                                    )}
                                    <Button onClick={handleSubmit}  placeholder={actionLabel}  size="md" color="blue">
                                        <span>{actionLabel}</span>
                                    </Button>
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;