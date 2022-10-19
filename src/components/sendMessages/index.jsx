import * as yup from 'yup'

import { Form, FormField, SubmitButton } from "../forms"

const validationSchema = yup.object().shape({
    content: yup.string().min(3).required().label('Text box'),
})

function SendMessages() {
    const initialValues = {
        message_id: '',
        user_name: '',
        content: '',
        createdOn: ''
    }

    const handleSubmit = (content_details, { resetForm }) => {
        console.log(content_details)
    }
    return (
        <Form
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            <div className="flex flex-row p-4 w-full">
                <FormField
                    id={'content'}
                    name={"content"}
                    className={`text-sm p-2.5`}
                    placeholder={"Type message..."}
                />
                <SubmitButton className={'ml-5  sm:w-auto'} text={"Submit"} />
            </div>
        </Form>
    )
}
export default  SendMessages