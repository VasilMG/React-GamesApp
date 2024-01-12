import { useEffect, useState } from "react"

export const useForm =  (onSubmitHandler, initialValues) => {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(initialValues);
    }, [initialValues])

    const onChange = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values);

    }

    return {values, onChange, onSubmit}
}