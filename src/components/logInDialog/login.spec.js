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

// // describe('LogIn', () => {
// //     const onSubmit = jest.fn()

// //     beforeEach(() => {
// //         onSubmit.mockClear();
// //         render(<LogIn onSubmit={onSubmit} isOpen={true} />);
        
// //     })
// //     it('onSubmit is called when all fields pass validation', () => {
// //         user.type(getName(), 'Srora')
// //         user.click(getLoginButton)
// //     })
// // })

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