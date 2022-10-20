import moment from 'moment'

import { layout } from '../../styles'
import { useAppSelector } from '../../hooks'
import { getMessage } from '../../features/messagesSlice'

function Messages({ messagesEndRef }) {
    const items = useAppSelector(getMessage)
    return (
        items?.length === 0 ? (
            <div className=' max-h-screen min-h-screen flex flex-1 items-center justify-center'>
                <p className='text-xl font-extrabold bg-transparent capitalize text-white'>no messages</p>
            </div>
        ) : (   
                <section id='home' className={`container mx-auto overflow-auto mt-3 mb-24 w-full`}>
                    {Object.entries(items).map(([key, items]) => (
                        <div key={key} className={`py-5 block clear-both px-16`}>
                            <div className={`${layout.sectionImg} w-96 float-left`}>
                                <div className={`items-center justify-center bg-blue-gradient flex-2 flex w-14 h-14 rounded-full shadow-lg`}>
                                    <p className={`text-white text-lg text-center capitalize`}>
                                        A
                                    </p>
                                </div>
                                <div className='box-shadow feedback-card  p-2 flex ml-3 flex-1 flex-col shadow-md rounded-r-lg rounded-bl-lg relative'>
                                    <p className='text-sm text-gradient font-normal font-mono'>
                                        {items.content}
                                    </p>
                                    <p className='text-xs text-black-gradient font-normal font-mono mt-4'>
                                        {moment(items.createdOn).fromNow(true)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </section>
            )
    )
}

export default Messages
