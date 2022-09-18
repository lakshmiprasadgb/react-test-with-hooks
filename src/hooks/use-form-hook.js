import { useState } from "react";

const useFormHook = (defaultValue = '' , validateFn) => {
    const [inputValue , setInputValue] = useState(defaultValue);
    const [isTouched,setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState(false)
    const handleChange = (event) => {
        const inputValue = event.target.value;
        setIsTouched(true);
        setIsValid(validateFn(inputValue))
        setInputValue(inputValue);
    }
    const resetInputValue = () => {
        setInputValue(defaultValue)
    }
    return [
        inputValue,
        isTouched,
        isValid,
        handleChange,
        resetInputValue
    ]
}

export default useFormHook;