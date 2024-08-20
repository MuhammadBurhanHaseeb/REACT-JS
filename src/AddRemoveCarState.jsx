import React,{useState} from "react";
function updateCarState()
{
    const [car, setCar] = useState([{year:2020 , model:"axis" , make :"coroloa"  }]);
    const [carYear, setCarYear] = useState();
    const [carMake, setCarMake] = useState();
    const [carModel, setCarModel] = useState();

    function addCar(){
        if(carYear === "" || carMake === "" || carModel === "") return;
        setCar(car =>  [...car, {year: carYear, model: carMake, make: carModel}]);

        setCarYear("");
        setCarModel("");
        setCarMake("");

    }

    function removeCar(index){

        if(car.length === 0 ) return;
        setCar(car.filter((carItem, i) => i !== index));
        
        

    }

   function updateCarYearChange(event){
    setCarYear(event.target.value);
   }
    function updateCarModelChange(event){
        setCarModel(event.target.value);

    }
    function updateCarMakeChange(event){
        setCarMake(event.target.value);
    }

    return (<>
    <div className="car">
        <h1>Car Details</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Year</th>
                    <th>Model</th>
                    <th>Make</th>
                </tr>
            </thead>
            <tbody>
                {car.map((carItem, index) => (
                    <tr key={index} onClick={()=>removeCar(index)}>
                        <td>{index}</td>
                        <td>{carItem.year}</td>
                        <td>{carItem.model}</td>
                        <td>{carItem.make}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="updateCardDetails">
            <h1>Update Car Details</h1>
            <input type="text" placeholder="Enter Year Of Car" onChange={updateCarYearChange} id ="carYear" value={carYear} />
            <br />

            <br />
            <input type="text" placeholder="Enter Model Of Car" onChange={updateCarModelChange} id ="carModel" value={carModel}/>
            <br />
            <br />

            <input type="text" placeholder="Enter Make Of Car" onChange={updateCarMakeChange} id ="carMake" value={carMake}/>
            <br />
            <br />
            <button onClick={addCar}>Add Car</button>
            
        </div>
        
    </div>

    </>);
}
export default  updateCarState;