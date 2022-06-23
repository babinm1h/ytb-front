import { MutableRefObject, useEffect, useRef } from "react";

export default function useScroll(parentRef: MutableRefObject<any>, childRef: MutableRefObject<any>, callback: any) {

    useEffect(() => {
        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        const observer = new IntersectionObserver(([target]) => {
            if (target.isIntersecting) {
                console.log('intersected')
                callback()
            }
        }, options)

        observer.observe(childRef.current)

        return () => {
            observer.unobserve(childRef.current)
        }
    }, [callback])
};