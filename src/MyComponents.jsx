// onchange handler used primarily with form elements
// ex . <input> <select> <textArea>  < radio >  etc 
// triigers a function every time the value of the input changes 
import React,{useState} from 'react';
function myComponents ()
{

    const [name , setName ] = useState();
    const [quantity , setQuantity ] = useState();
    const [comments , setComments ] = useState();
    const [payment , setPayment ] = useState();
    const [shipping , setShipping ] = useState();


    function handleNameChange(event){
        setName(event.target.value)
    
    }

    function HandleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComments(event.target.value)
    }

    function handlePayemntChange(event){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return (
    <> 
    <div>

        <input id ="hh" value ={name} onChange={handleNameChange}  />
        <p>Name : {name}</p>

        <input id ="hh" value ={quantity} onChange={HandleQuantityChange}  />
        <p>Quantity : {quantity}</p>

        <textarea value={comments} onChange={handleCommentChange} placeholder='Enter Delivery Instrucyion'></textarea>
        <p>Comments : {comments}</p>

        <select value={payment}  onChange={handlePayemntChange}>
            <option value="">Select the Option </option>
            <option value="Visa">Visa</option>
            <option value="PayPak">PayPak</option>
            <option value="UnionPay">UnionPay</option>
            <option value="MasterCard">MasterCard</option>
        </select>
        <p>Payement : {payment}</p>


        <label >
            <input type="radio" value="Pick Up" checked={shipping ==='Pick Up'} onChange={handleShippingChange} />
            PickUp
        </label>
        <br />
        <hr />
        <label >
            <input type="radio" value="Home Delivery" checked={shipping ==='Home Delivery'} onChange={handleShippingChange} />
            HomeDelivery
        </label>
        <p>Shipping : {shipping}</p>
    </div>

    </>
    );
}
export default myComponents;