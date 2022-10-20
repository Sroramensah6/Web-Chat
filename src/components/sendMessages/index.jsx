import { messageInitialValues, messageValidationSchema } from '../../constants'

import { Form, FormField, SubmitButton } from "../forms"

function SendMessages({ onSubmit }) {

    const handleSubmit = (content_details, { resetForm }) => {
        onSubmit(content_details)
        resetForm()
    }
    return (
        <Form
            onSubmit={handleSubmit}
            initialValues={messageInitialValues}
            validationSchema={messageValidationSchema}
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
export default SendMessages
