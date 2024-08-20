import React,{useState} from "react";
function updateArrayState() {
  const[food , setFood ] = useState(["Applae","Banana","Mango","Orange","Grapes"]);
  
  function handleAddFood(){
    const newFood = document.querySelector("input").value;
    if(newFood === "") return;
    setFood(food => ([...food, newFood]) );
      


    }
    function handleRemoveFood(index){
        if(food.length === 0) return;
        setFood (food.filter((_, i) => i !== index));
        // setFood (     food.filter((food, i) => i  !== food.length));
      }

    return (
        <div className="Foods">
            <h1>Add And Remove Foods</h1>
            <h2>Food List</h2>
            <ul style={{listStyle : "none "}}>
                {food.map((food, index) => (
                    <li key={index}  onClick={()=>handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            <input type="text" placeholder="Enter Food Name" />
            <br />
            <br />

            <button onClick={handleAddFood}>Add Food</button>
            {/* <button onClick={handleRemoveFood} style={{marginLeft : 10}}>Remove Food</button> */}
        </div>
    );
}
export default updateArrayState;