// updater function to update the value of the variable in the virtual DOM in the previous state adding the new value of the variable

import React,{useState} from "react";
function updaterFunction()
{
    const [name, setName] = useState(0);// declare a variable that result reflect on virtual DOM
    const handleButtonClick = (value) => {
        if (value === 'Decrement') {
            setName(name =>  name - 1);
            setName(name =>  name - 1);
            setName(name =>  name - 1);

        } else if (value === 'Reset') {
            setName(0);
        } else if (value === 'Increment') {
            setName(c=> c + 1); // addign into the previous state value
            setName(c => c + 1);
        }
    };
    
    return (
        <>
            <div className="setterDiv">
                <p className="ValuePara">
                    {name}
                </p>
                <div className="buttonsDiv">
                    <button className="but" value="Decrement" onClick={() => handleButtonClick('Decrement')}>Decrement</button>
                    <button className="but" value="Reset" onClick={() => handleButtonClick('Reset')}>Reset</button>
                    <button className="but" value="Increment" onClick={() => handleButtonClick('Increment')}>Increment</button>
                </div>
            </div>
        </>
    );}
export default updaterFunction;