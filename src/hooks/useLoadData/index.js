import { useEffect, useState } from "react"

export default function useLoadData ({ items }){
    const [counter, setCounter] = useState(25)
    let data = items?.slice(-counter)

    const handleScroll = (e) => {
        const winHeight=window.innerHeight + document.documentElement.scrollTop
        const eleHeight = document.documentElement.offsetHeight
        if (items?.length > 26) {
            if ((winHeight - 200 <= eleHeight) || winHeight===eleHeight) {
                if (counter <= items.length) {
                    setCounter((counter) => counter+5)
                    console.log({'counter': counter})
                } else {
                    return null
                }
            }
        }
    } 

    useEffect(() => {
        window.onscroll = handleScroll

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [counter]) 

    return { data }
}