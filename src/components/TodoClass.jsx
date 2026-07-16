import React from "react"

// const fetchTodos = (categoryId) => {
//     return Promise.resolve([
//         {
//             id: 1,
//             title: `Todo for ${categoryId || "all"}`,
//             completed: false,
//         },
//     ])
// }

class Todos extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.updateTodos = this.updateTodos.bind(this)
    // }
    state = {
        // todos: [],
        // loading: true
        todo: '',
        warning: null
    }
    // componentDidMount() {
    //     this.updateTodos(this.props.categoryId)
    // }
    // componentDidUpdate(prevProps) {
    //     if (prevProps.categoryId !== this.props.categoryId) {
    //         this.updateTodos(this.props.categoryId)
    //     }
    // }
    // updateTodos(categoryId) {
    //     this.setState({ loading: true })
    //     fetchTodos(categoryId).then(todos => {
    //         this.setState({ todos, loading: false })
    //     })
    // }
    handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')
            ? 'You need Javascript skill to complete the task. Do you have it?' : null

        this.setState({ 
            todo: inputValue, 
            warning 
        });
    }

    render() {
        const { todo, warning } = this.state;
        return (
            <div>
                <p>{todo}</p>
                <p>
                    <textarea name="todo" value={todo} onChange={this.handleInput} />
                </p>
                <hr />
                <h2>{warning || 'Good choice!'}</h2>
            </div>
        )
    }
}

// const Todos = React.createClass({
//     getInitialState(){

//     }
// })

export default Todos