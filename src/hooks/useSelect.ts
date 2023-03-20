import {useEffect, useState} from "react";


export const useSelect = (initialValue:any) => {
    const [value, setValue] = useState(initialValue)
    useEffect(()=>{
        setValue(initialValue)
    },[])
    return value
}