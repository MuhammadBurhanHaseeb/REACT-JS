import React,{useState} from "react";
function updateCarState()
{
    const [carState, setCarState] = useState({year: 2021,
                                             model: 'Toyota',
                                             color: 'black',
                                             state: 'Car is stopped'});
   function updateYearChange(event){
    //    setCarState({...carState, year: event.target.value});  
        setCarState(carState => ({...carState, year: event.target.value}));    
   }
    function updateModelChange(event){
        //  setCarState({...carState, model: event.target.value});
        setCarState(carState => ({...carState, model: event.target.value}) );

    }
    function updateColorChange(event){
        setCarState(carState => ({...carState, color: event.target.value}));
    }
    function updateStateChange(event){
        setCarState (carState =>  ({...carState, state: event.target.value}));
    }

    return (<>
    <div className="car">
        <h1>Car Details</h1>
        <p>Year: {carState.year}</p>
        <p>Model: {carState.model}</p>
        <p>Color: {carState.color}</p>
        <p>State: {carState.state}</p>
        <br/>
        <br/>
        <hr />
        <div className="updateCardDetails">
            <h1>Update Car Details</h1>
            <input type="text" placeholder="Enter Year Of Car" onChange={updateYearChange}/>
            <br />

            <br />
            <input type="text" placeholder="Enter Model Of Car" onChange={updateModelChange} />
            <br />
            <br />

            <input type="text" placeholder="Enter Color Of Car" onChange={updateColorChange}/>
            <br />
            <br />

            
            <label >
                <input type="radio" value="Car Is Start" checked={carState.state ==='Start'} onChange={updateStateChange} />
            Start
            </label>
            
            <label >
                <input type="radio" value="Car Is Stopped" checked={carState.state ==='Stop'} onChange={updateStateChange} />
            Stop
            </label>
        </div>
        
    </div>

    </>);
}
export default  updateCarState;