import React, {useEffect, useMemo, useState} from "react";


export const useInput = (initialValue: any, errorInput?: boolean) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)
    useEffect(() => {
        if (errorInput) {
            setError(errorInput)
        }
    }, [errorInput])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        if (e.target.value === '') {
            setError(true)
        } else {
            setError(false)
        }
    }

    return {
        value, onChange, error
    }
}