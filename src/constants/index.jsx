import { logInInitialValues, messageInitialValues } from "./initialValues"
import { logInValidationSchema, messageValidationSchema } from "./validationSchema"

const sleep = ms => new Promise(r => setTimeout(r, ms))

export { sleep, logInInitialValues, messageInitialValues, logInValidationSchema, messageValidationSchema }