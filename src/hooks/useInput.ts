import React, {useEffect, useMemo, useState} from "react";


export const useInput = (initialValue:any,) => {
    const [value, setValue] = useState(initialValue)
    const [error, setError] = useState(false)


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        if(e.target.value ===''){
            setError(true)
        }else{
            setError(false)
        }
    }

    return {
        value, onChange,error
    }
}