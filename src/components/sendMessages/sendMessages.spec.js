import React from "react"
import { Provider } from "react-redux"
import user from '@testing-library/user-event'
import { PersistGate } from 'redux-persist/integration/react'
import { render, screen, waitFor } from "@testing-library/react"

import SendMessages from "."
import { store, persister } from "../../redux"

test('rendering and submitting LogIn form', async () => {
    const handleSubmit = jest.fn()
    render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                <SendMessages onSubmit={handleSubmit} />
            </PersistGate>
        </Provider> 
    )
    
    user.type(getInput(), 'consectetur adipisicing elit.')
    user.click(getLoginButton())
    await waitFor(() =>
        expect(handleSubmit).toHaveBeenCalledWith({
            content: `consectetur adipisicing elit.`, 
            createdOn: '',
            message_id: '',
            user_id: "",
            user_name: ''
        }),
    )
})

function getInput (){ 
    return screen.getByRole('textbox')
}

function getLoginButton (){
    return screen.getByRole('button', {
        name: /submit/i
    })
}
