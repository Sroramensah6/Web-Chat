import { useEffect, useRef, useState } from 'react'

import styles from './styles'
import { Messages, SendMessages } from './components'
import { useAppDispatch, useAppSelector, useScrollToBottom } from './hooks'
import { addMessage, getMessage } from './features/messagesSlice'
import LogInDialog from './components/logInDialog'
import { retrieveData, storeData } from './util'

function App() {
  const dispatch = useAppDispatch()
  const items = useAppSelector(getMessage)

  const user = retrieveData('user')

  const messagesEndRef = useRef(null)

  const [isOpen, setIsOpen] = useState(true)
  const [users, setUser] = useState()

  const { scrollToBottom } = useScrollToBottom(messagesEndRef)
  
  useEffect(() => setUser(user), [isOpen])
  
  useEffect(() => scrollToBottom(), [items])

  const onSubmitLogIn = (values) => {
    values.id = new Date().getTime().toString(36) + new Date().getUTCMilliseconds()
    values.isActive = !values.isActive
    storeData('user', values)
    scrollToBottom()
    setIsOpen((prev) => !prev)
  }
  
  const onSubmitMessage = (values) => {
    values.message_id = new Date().getTime().toString(36) + new Date().getUTCMilliseconds()
    values.createdOn = new Date()
    dispatch(addMessage(values))
  }

  return (
    <div className=" max-h-screen min-h-screen flex flex-col relative">
      <div className={`flex flex-grow ${styles.flexStart} bg-black`}>
        <Messages user={users} messagesEndRef={messagesEndRef} />
        <div className="fixed w-full bottom-0 bg-black">
          <SendMessages onSubmit={onSubmitMessage}  />
        </div>
      </div>
      <LogInDialog onSubmit={onSubmitLogIn} isOpen={!user} scrollToBottom={scrollToBottom} />
    </div>
  );
}

export default App;
