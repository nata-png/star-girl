import React,{useState,useEffect} from "react"
const Counter = () => {
    const [count, setCount] = useState(0);
return(
    <div>
<h1>count: {count}</h1>
<button onClick={() => setCount(count + 1)} >Increase</button>
<button onClick={() => setCount(count - 1)}>Decrease</button>

    </div>
);
};

useEffect(() =>{
    console.log('count changed: $(count)');
},[count]);
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
);

export default Counter;