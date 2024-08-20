import React,{useState , useEffect,useContext} from "react";
import {MyContext} from './useContextA.jsx';

function useContextD()
{


const userValue = useContext(MyContext);
    return (
        <div className="componentBox">
            <h1>UseContext Component D</h1>
            <h2>{`hello ${userValue}`}</h2>
            {/* <h2>{`bye ${props.user}`}</h2> */}
        </div>
    );
}
export default useContextD;