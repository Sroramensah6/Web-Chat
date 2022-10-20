import moment from 'moment'

import { layout } from '../../styles'
import { useAppSelector, useLoadData } from '../../hooks'
import { getMessage } from '../../features/messagesSlice'

function Messages({ messagesEndRef, user }) {
    const items = useAppSelector(getMessage)

    const { data } = useLoadData({items})

    console.log(items);
    console.log(data?.length);

    if (!user) return null
    
    return (
        data?.length === 0 ? (
            <div className=' max-h-screen min-h-screen flex flex-1 items-center justify-center'>
                <p className='text-xl font-extrabold bg-transparent capitalize text-white'>no messages</p>
            </div>
        ) : (   
                <section id='home' className={`container mx-auto overflow-auto mt-3 mb-24 w-full`}>
                    {Object.entries(data).map(([key, items]) => (
                        <div key={key} className={`py-5 block clear-both px-16`}>
                            {items?.user_name !== user?.name ? (
                                <div className={`${layout.sectionImg} w-96 float-left`}>
                                    <div className={`items-center justify-center bg-blue-gradient flex-2 flex w-14 h-14 rounded-full shadow-lg`}>
                                        <p className={`text-white text-lg text-center capitalize`}>
                                            {items?.user_name?.charAt(0)}
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
                            ) : (
                                    <div className={`${layout.sectionImg} w-96 float-right`}>
                                        <div className='feature-card p-2 flex  flex-1 flex-col shadow-md rounded-l-lg rounded-br-lg relative'>
                                            <p className='text-sm text-gradient font-normal font-mono'>
                                                {items.content}
                                            </p>
                                            <p className='text-xs text-black-gradient font-normal font-mono mt-4'>
                                                {moment(items.createdOn).fromNow(true)}
                                            </p>
                                        </div>
                                        <div className={`flex flex-2 ml-3 items-center  justify-center bg-blue-gradient w-14 h-14 rounded-full shadow-lg`}>
                                            <p className={`text-white text-lg text-center capitalize`}>
                                                {items?.user_name?.charAt(0)}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </section>
            )
    )
}

export default Messages
