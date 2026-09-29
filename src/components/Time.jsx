import React from 'react'

export default function Time() {
    const [date, setDate] = React.useState(new Date())
    const buttonRef = React.useRef(null)

    const tick = () => {
        setDate(new Date())
    }

    React.useEffect(() => {
        buttonRef.current = setInterval(tick, 1000)
        return () => {
            clearInterval(buttonRef.current)
        }
    }, [])

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button type="button" onClick={()=> clearInterval(buttonRef.current)}>Cleanup</button>
        </div>
    )
}