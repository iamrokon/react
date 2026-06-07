import React from "react";
import Button from "./Button";

interface ClockProps {
    locale: string;
}

interface ClockState {
    date: Date;
    locale: string;
}

class ClockClass extends React.Component<ClockProps, ClockState> {
    state = {date: new Date(), locale: 'bn-BD'};
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

    handleClick = (locale) => {
        this.setState({
            locale
        });
    }
    
    render(){
        const { date, locale } = this.state;
        let button;
        if (locale === 'bn-BD'){
            button = (
                <Button change={this.handleClick} locale='en-US' show={false}/>
            )
        } else {
            button = (
                <Button change={this.handleClick} locale='bn-BD' show/>
            )
        }
        return(
            <div>
                <h1 className='heading'>
                    <span className='text'>Hello {date.toLocaleTimeString(locale)}</span>
                </h1>
                {/* <button onClick={() => this.handleClick('en-US')}>Click Here</button> */}
                {/* <Button change={this.handleClick} locale='en-US'/> */}
                {button}
            </div>
        );
    }
}
export default ClockClass;