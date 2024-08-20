
import React, { useState,useEffect,useRef } from 'react';

function UseReffConcept() {

    // let [number, setNumber] = useState(0);

    const ref = useRef(0);
    const inputref = useRef(null);
    const inputref1 = useRef(null);
    const inputref2 = useRef(null);

    useEffect(() => {
        console.log("Use Effect Called");
        console.log(inputref);
    });

    function handlewClick() {
        // setNumber(n=> n + 1);
        ref.current = ref.current + 1;
        // console.log(ref.current);

        inputref.current.focus();
        inputref.current.value = "Burhan";
        inputref.current.style.color = "red";
        inputref.current.style.backgroundColor = "yellow";
    }   

    function handlewClick1() {
        // setNumber(n=> n + 1);
        ref.current = ref.current + 1;
        // console.log(ref.current);

        inputref1.current.focus();
        inputref1.current.value = "Wahab";
        inputref1.current.style.color = "blue";
        inputref1.current.style.backgroundColor = "green";
    }   

    function handlewClick2() {
        // setNumber(n=> n + 1);
        ref.current = ref.current + 1;
        // console.log(ref.current);

        inputref2.current.focus();
        inputref2.current.value = "Aseed";
        inputref2.current.style.color = "purple";
        inputref2.current.style.backgroundColor = "yellow";
    }   
    return (
        <>
        <h1>Use Reff Concept</h1>
        <h2>{ref.current}</h2>
        {/* <h2>{number}</h2> */}
        <button onClick = {handlewClick}>Increment</button>
        <input type="text" name="" id="" ref ={inputref}/>
        <br />
        <button onClick = {handlewClick1}>Increment1</button>
        <input type="text" name="" id="" ref ={inputref1}/>
        <br />
        <button onClick = {handlewClick2}>Increment2</button>
        <input type="text" name="" id="" ref ={inputref2}/>
        </>
    );
}
export default UseReffConcept;
