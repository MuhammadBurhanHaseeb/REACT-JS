import React,{useState , useEffect,useContext} from "react";
import {MyContext} from './useContextA.jsx';
import ComponentD from './useContextD.jsx';
function useContextC()
{

    const userValue = useContext(MyContext);


    return (
        <div className="componentBox">
            <h1>UseContext Component C</h1>
            <h2>{`hello ${userValue}`} </h2>
            <ComponentD />
            {/* <ComponentD user = {props.user}/> */}
        </div>
    );
}
export default useContextC;