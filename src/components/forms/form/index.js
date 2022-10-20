import { Formik } from 'formik'

function Form({initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}>
            {() => <>{children}</>}
        </Formik>
    )
}

export default Form