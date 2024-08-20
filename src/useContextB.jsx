import React,{useState , useEffect,useContext} from "react";
import ComponentC  from './useContextC.jsx';
import {MyContext} from './useContextA.jsx';

function useContextB()
{


    const userValue = useContext(MyContext);
    return (
        <div className="componentBox">
            <h1>UseContext Component B</h1>
            <h2>{`hello ${userValue}`}</h2>
            <ComponentC />
            {/* <ComponentC user = {props.user} /> */}
        </div>
    );
}
export default useContextB;