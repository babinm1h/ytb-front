import { useState } from "react"


export const useModal = () => {
    let [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
        setIsOpen(false)
    }

    const onOpen = () => {
        setIsOpen(true)
    }

    return { onClose, onOpen, isOpen }
}