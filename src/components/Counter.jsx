import React from "react";

// class Counter extends React.Component {
//     state = {
//         count: 0,
//     };

//     incrementCount = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }))
//     }

//     render() {
//         // const { render } = this.props;
//         const { children } = this.props;
//         const { count } = this.state;
        
//         // return render(count, this.incrementCount);
//         return children(count, this.incrementCount);
//     }
// }

function Counter(){
    const [count, setCount] = React.useState(0);
    let i = 0;

    const addFive = () => {
        while(i < 5){
            setCount((prevState) => prevState + 1);
            i++;
        }
    }
    return (
        <div>
            <p>Count: {count}</p>
            <p><button type="button" onClick={() => setCount((prevState) => prevState + 1)}>Add 1</button></p>
            <p><button type="button" onClick={addFive}>Add 5</button></p>
        </div>
    )
}

export default Counter;