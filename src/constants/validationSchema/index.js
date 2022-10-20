import * as yup from 'yup'

export const logInValidationSchema = yup.object().shape({
    id: yup.string().label('id'),
    name: yup.string().min(3).required().label('Name'),
})

export const messageValidationSchema = yup.object().shape({
    content: yup.string().min(3).required().label('Text box'),
})
