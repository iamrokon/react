import { useEffect, useRef } from 'react'
import Input from './Input'

export default function Form() {
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <p>
                {/* <input ref={inputRef} type="text" placeholder="Enter something" /> */}
                <Input ref={inputRef} type="text" placeholder="Enter something" />
            </p>
        </div>
    )
}