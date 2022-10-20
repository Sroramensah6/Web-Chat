import { useEffect, useRef } from 'react'

import styles from './styles'
import { Messages, SendMessages } from './components'
import { useAppDispatch, useAppSelector } from './hooks'
import { addMessage, getMessage } from './features/messagesSlice'

function App() {
  const dispatch = useAppDispatch()
  const items = useAppSelector(getMessage)

  const messagesEndRef = useRef(null)
  
  useEffect(() => {
    scrollToBottom()
  }, [items])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const onSubmitMessage = (values) => {
    values.message_id = new Date().getTime().toString(36) + new Date().getUTCMilliseconds()
    values.createdOn = new Date()
    dispatch(addMessage(values))
  }

  return (
    <div className=" max-h-screen min-h-screen flex flex-col relative">
      <div className={`flex flex-grow ${styles.flexStart} bg-black`}>
        <Messages messagesEndRef={messagesEndRef} />
        <div className="fixed w-full bottom-0 bg-black">
          <SendMessages onSubmit={onSubmitMessage}  />
        </div>
      </div>
    </div>
  );
}

export default App;
