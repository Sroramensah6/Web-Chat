import styles from './styles'
import { Messages, SendMessages } from './components'

function App() {
  return (
    <div className=" max-h-screen min-h-screen flex flex-col relative">
      <div className={`flex flex-grow ${styles.flexStart} bg-black`}>
        <Messages />
        <div className="fixed w-full bottom-0 bg-black">
          <SendMessages />
        </div>
      </div>
    </div>
  );
}

export default App;
