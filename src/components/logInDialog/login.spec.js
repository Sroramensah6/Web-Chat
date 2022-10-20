import React from "react"
import user from '@testing-library/user-event'
import { render, screen, waitFor } from "@testing-library/react"

import LogIn from "."

test('rendering and submitting LogIn form', async () => {
    const handleSubmit = jest.fn()
    render(<LogIn onSubmit={handleSubmit} isOpen={true} />)
    // const user = userEvent.setup()
    user.type(getName(), 'John Dee')
    user.click(getLoginButton())
    await waitFor(() =>
        expect(handleSubmit).toHaveBeenCalledWith({
            isActive: true,
            name: 'John Dee',
        }),
    )
})

function getName (){
    return screen.getByRole('textbox', {
        name: /name/i
    })
}
function getLoginButton (){
    return screen.getByRole('button', {
        name: /login/i
    })
}
