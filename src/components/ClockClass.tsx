import React from "react";

interface ClockProps {
    locale: string;
}

class ClockClass extends React.Component<ClockProps> {
    state = {date: new Date()};
    clockTimer: ReturnType<typeof setInterval> | undefined;

    componentDidMount(){
        this.clockTimer = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    tick(){
        this.setState({date: new Date()});
    }
    
    render(){
        return(
            <h1 className='heading'>
                <span className='text'>Hello {this.state.date.toLocaleTimeString(this.props.locale)}</span>
            </h1>
        );
    }
}
export default ClockClass;