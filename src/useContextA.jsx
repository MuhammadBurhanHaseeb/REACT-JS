import React,{useState , useEffect, createContext} from "react";

// react hook that allows you to share values 
//between the multiple level of components 
// without passing props through every level of the tree.

export const MyContext = createContext();


import ComponentB  from './useContextB.jsx';

function useContextA()
{

    const [user, setUser] = useState('Burhan');


    return (
        <div className="componentBox">
            <h1>UseContext Component A</h1>
            <h2>{`hello ${user}`}</h2>
            <MyContext.Provider value={user}>
            <ComponentB />
            </MyContext.Provider>
            {/* <ComponentB user ={user}/> */}
        </div>
    );
}
export default useContextA;