import { forwardRef } from 'react'
import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

import { Form, FormField, SubmitButton } from "../forms"
import { logInInitialValues, logInValidationSchema, sleep } from '../../constants'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function LogInDialog({ onSubmit, isOpen }) {
    
    const handleSubmit = async (user_details, { resetForm }) => {
        await sleep(1000)
        onSubmit(user_details)
        resetForm()
    }

    return (
        <Dialog
            keepMounted
            open={isOpen}
            fullWidth={true}
            maxWidth={'sm'}
            PaperProps={{
                style: {
                    backgroundColor: '#11101d',
                    borderRadius: 13
                },
            }}
            TransitionComponent={Transition}
            aria-describedby="alert-dialog-slide-create-an-account"
        >
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-create-an-account">
                    <Form
                        onSubmit={handleSubmit}
                        initialValues={logInInitialValues}
                        validationSchema={logInValidationSchema}
                    >
                        <FormField
                            id={'name'}
                            name={"name"}
                            label={"Name"}
                            className={'mb-3'}
                            placeholder={"Please enter your Full name"}
                        />
                        <div className='my-5'>
                            <SubmitButton className={'w-full'} text={"Login"} />
                        </div>
                        </Form>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}

export default LogInDialog
