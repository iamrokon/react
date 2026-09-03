import React from "react";

class MyComponentClass extends React.Component {
    state = {
        count: 0,
        date: new Date()
    }

    componentDidMount() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
        this.interval = setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        const { count } = this.state
        document.title = `Clicked ${count} times`;
    }

    componentWillUnmount() {
        console.log('stopping timer')
        clearInterval(this.interval)
    }

    addClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }))
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        const { date } = this.state;
        return (
            <div>
                <p>Time: {date.toLocaleTimeString()}</p>
                <h1>{this.state.count}</h1>
                <p>
                    <button type="button" onClick={this.addClick}>Click</button>
                </p>
            </div>
        )
    }
}

export default MyComponentClass;