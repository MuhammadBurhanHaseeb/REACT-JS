import React,{useState} from 'react';

function reactHook()
{

    const [name, setName] = useState(0);// declare a variable that result reflect on virtual DOM
    const handleButtonClick = (value) => {
        if (value === 'Decrement') {
            setName(name - 1);
        } else if (value === 'Reset') {
            setName(0);
        } else if (value === 'Increment') {
            setName(name + 1);
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
    );

  
}
export default reactHook;