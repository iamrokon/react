import React from "react";

export default class Form extends React.Component {
    state = {
        title: 'Javascript',
        text: 'Javascript is awesome',
        // library: 'React',
        library: null,
        isAwesome: true
    }
    handleChange = (e) => {
        // if(e.target.type === 'text'){
        //     this.setState({
        //         title: e.target.value
        //     })
        // } else if(e.target.type === 'textarea') {
        //     this.setState({
        //         text: e.target.value
        //     })
        // } else if(e.target.type === 'select-one') {
        //     this.setState({
        //         library: e.target.value
        //     })
        // } else if(e.target.type === 'checkbox') {
        //     this.setState({
        //         isAwesome: e.target.checked
        //     })
        // } else {
        //     console.log('nothing here')
        // }
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
        const {name, value, type, checked} = e.target
        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        const {title, text, library, isAwesome} = this.state
        console.log(title, text, library, isAwesome)
    }
    render() {
        const {title, text, library, isAwesome} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Enter title" 
                        value={title} 
                        onChange={this.handleChange} 
                    />
                    <p>{title}</p>
                    <br /><br />
                    <textarea 
                        name="text" 
                        value={text}
                        onChange={this.handleChange}
                    />
                    <p>{text}</p>
                    
                    <br /><br />
                    <select name="library" value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <p>{library}</p>
                    <br /><br />
                    <input type="checkbox" name="isAwesome" checked={isAwesome}
                        onChange={this.handleChange} 
                    />
                    <p>{isAwesome ? 'Awesome' : 'Not Awesome'}</p>
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}