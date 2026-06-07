import React from 'react';
import ClockClass from './ClockClass';

class ClockList extends React.Component {
    render(){
        const { quantities } = this.props;
        return(
            <div>
                <h1>Clock List</h1>
                {quantities.map(key => (
                    <ClockClass key={key}/>
                ))}
            </div>
        );
    }
}
export default ClockList;