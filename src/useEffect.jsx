import React,{useState , useEffect} from "react";



function useEffectConcepts() {

const [width , setWidth] = useState(window.innerWidth);
const [height , setHeight] = useState(window.innerHeight);


function handleResize(){
    setWidth(w => window.innerWidth);
    setHeight(h => window.innerHeight);
}

// window.addEventListener('resize' , handleResize);// if without the use effect 
//  console.log('rendered');

useEffect(()=>{
    window.addEventListener('resize' , handleResize);
    console.log('rendered');
    return ()=>{
        window.removeEventListener('resize' , handleResize);
        console.log('rendered removed');
    }
},[]); // if we pass empty array then it will run only once when component is mounted

useEffect(()=>{
    document.title = ` ${width} x ${height}`;
    return ()=>{
    }
},[width , height]); // if we dont pass any array then it will run on every render


const[count , setCount] = useState(0);  // 0 is initial value of count
const[color, setColor] = useState('red'); // red is initial value of color

useEffect(()=>{ 
    document.title = `Counr : ${count} ${color}`; } 
    // ,[] 
    , [count , color]
); 




function increment(){
    setCount(c => c + 1);
    setColor('green');
}   


function decrement(){
    setCount(c => c - 1);
    setColor('blue');
}   

function changeColor(){
    setColor(c => c === 'yellow' ? 'white' : 'yellow');
}   

    return (
        <>
       <div>
            <h1>useEffect Concepts</h1>
            <p style={{
                color: color
            }} >Count : {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
        <div>
            <p>Window Width : {width} px</p>
            <p>Window Width : {height} px</p>
        </div>
        



        </>
 
    );
}
export default useEffectConcepts;
