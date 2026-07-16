import React from "react"

// function Todo({ categoryId }) {
function Todo() {
    // const [todos, setTodos] = React.useState([])
    // const [loading, setLoading] = React.useState(true)
    const [todo, setTodo] = React.useState('')
    const [warning, setWarning] = React.useState(null)

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js')
            ? 'You need Javascript skill to complete the task. Do you have it?' : null

        setTodo(inputValue)
        setWarning(updatedWarning)
    }

    // React.useEffect(() => {
    //     setLoading(true)
    //     fetchTodos(categoryId).then(todos => {
    //         setTodos(todos)
    //         setLoading(false)
    //     })
    // }, [categoryId])

    // if (loading) {
    //     return <div>Loading...</div>
    // }

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr />
            <p>{warning || 'Good choice!'}</p>
        {/* // <ul>
        //     {todos.map(todo => (
        //         <li key={todo.id}>
        //             {todo.title}
        //         </li>
        //     ))}
        // </ul> */}
        </div>
    )
}

export default Todo