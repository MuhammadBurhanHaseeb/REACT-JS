import PropTypes from 'prop-types';
// click event = an interaction when a user clicks on a specific elemnt we can respond to clicks by 
// passing a callback to the onClick event handler 

function clickEvent(){
    let count =0;
    // const handleClick =()=> console.log("hello ouch !");
    const handleClick =(e)=> e.target.textContent = "hoho";
    // const handleClick2 = (name) => 
    //     {
    //         if(count <3 )
    //         {
    //             count++;
    //             console.log(`${name} you click me ${count} times ` );
    //         }
    //         else 
    //         {
    //             console.log ("No para war ");
    //         }

    //     };
        
    return (
        <>
        {/* <button onClick={handleClick}  >Hello Click Here </button> */}
        {/* <hr/> */}

        {/* <button onClick={() => handleClick2("burhanButt")}  >Hello Click me </button> */}
        <button onClick={(e) => handleClick(e)}  >Hello Click me </button>
        <hr />
        <button onDoubleClick={(e) => handleClick(e)}  >Hello Click me </button>
        </>
    )
}
export default clickEvent;