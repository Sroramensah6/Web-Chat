import { forwardRef } from 'react'
import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'

import { Form, FormField, SubmitButton } from "../forms"
import { logInInitialValues, logInValidationSchema, sleep } from '../../constants'
  
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const LogInDialog = ({ onSubmit, isOpen }) => {
 
    const handleSubmit = async (user_details, { resetForm }) => {
        user_details.isActive = true
        await sleep(500)
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
                        placeholder={"Put In Your Full Name"}
                    />
                    <div className='my-5'>
                        <SubmitButton className={'w-full'} text={"Login"} />
                    </div>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default LogInDialog
