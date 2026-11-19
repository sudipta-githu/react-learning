import React, {useState, useEffect} from "react";

function MyComponent_7(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        return () => {
            // SOME CLEANUP CODE
        }
    },[count, color])

    function addCount(){
        setCount(c => c + 1);
    }

    function subtractCount(){
        setCount(c => c - 1);
    }

    function chnageColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return (<>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={chnageColor}>Chnage</button>
    </>);
}

export default MyComponent_7