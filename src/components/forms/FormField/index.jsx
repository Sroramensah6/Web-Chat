import { useFormikContext } from 'formik'

import ErrorMessage from '../errorMessage'

function FormField({ id, name, placeholder, type, label, className }) {
    const { setFieldValue, errors, touched, values } = useFormikContext()
    
    const validation = () => {
        if (!touched[name] || !errors[name]) return false
        return true;
    }

    return (
        <>
            {label && <label htmlFor={name} className="block uppercase tracking-wide text-xs mb-2 font-bold py-1 pt-5 text-gray-300">{label}</label>}
            <input
                id={id}
                type={type}
                name={name}
                value={values[name]}
                placeholder={placeholder}
                onChange={(e) => {
                    e.preventDefault()
                    setFieldValue(name, e.target.value)
                }}
                className={` ${className}
                    border ${validation() ? 'border-red-600' : 'border-gray-300'} 
                    shadow p-3 w-full rounded
                `}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}  />
        </>
    )
}
export default FormField
