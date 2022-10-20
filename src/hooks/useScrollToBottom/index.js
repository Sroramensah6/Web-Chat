function useScrollToBottom (ref) {   
    const scrollToBottom = () => ref?.current?.scrollIntoView({ behavior: "smooth" })
    return { scrollToBottom }
}
export default useScrollToBottom
