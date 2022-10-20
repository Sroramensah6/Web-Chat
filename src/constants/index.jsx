import { logInInitialValues } from "./initialValues"
import { logInValidationSchema } from "./validationSchema"

const sleep = ms => new Promise(r => setTimeout(r, ms))

export { sleep, logInInitialValues, logInValidationSchema }