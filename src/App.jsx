import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'  
import Card from './card.jsx'
import Button from './Button.jsx' 
import Student from './Student.jsx'
import UserGreetings from './UserGreeting.jsx'
import List from './list.jsx'
import ClickEvent from './clickEvent.jsx'
import ProfilePicture from './profilePicture.jsx';
import ReactHook from './ReactHook.jsx';
import MyComponents from './MyComponents.jsx';
import ColorPicker from './ColorPicker.jsx';
import UpdaterFunction from './updaterFunction.jsx';
import UpdateCarState from './updateStateOfCar.jsx';
import UpdateArrayState from './updateArrayState.jsx';
import AddRemoveCarState from './AddRemoveCarState.jsx';
import ToDoList from './To-Do-List';
import UseEffect from './useEffect.jsx';
import DigitalClock from './DigitalClock.jsx';
import UseContext  from './useContextA.jsx';
import UseReffConcept from './useReffConcept.jsx';
import StopWatch from './stopWatch.jsx';

import './App.css'

function App() {
    const fruitsObjectList = [
        { id :1 ,  name: 'apple', price: 122 },
        { id :2 , name: 'banana', price: 200 },
        { id :3 , name: 'mango', price: 300 },
        { id :4 , name: 'orange', price: 400 },
        { id :5 , name: 'grapes', price: 500 },
    ];
    const vegtables = [
        { id :1 ,  name: 'apple', price: 100 },
        { id :2 , name: 'banana', price: 200 },
        { id :3 , name: 'mango', price: 300 },
        { id :4 , name: 'orange', price: 400 },
        { id :5 , name: 'grapes', price: 500 },
    ];
 
return (
    <>
        <Header/>
        <Food/> 
        <Footer/> 
        <Card/> <Card/> <Card/> 
        <Button/>
        <Student /> 
        <Student name="Burhan" age={20} isStudent = {true} /> 
        <Student name="BUTT" age={22} isStudent = {false}  />
        <UserGreetings isLoggedIn = {false} username ="BurhanButt" /> <UserGreetings isLoggedIn = {true} username ="bhb" /> 
    
        {fruitsObjectList.length > 0 && <List    items = {fruitsObjectList}  category = "Fruits"/>  }
        {vegtables.length>0 ? <List items = {vegtables}  category = "Vegetables"/> : null }
        {vegtables.length>0 && <List items = {vegtables}  category = "Vegetables"/>  }
        <ClickEvent />
        <ProfilePicture />
        <ReactHook/> // useState
        <MyComponents />
        <ColorPicker />
        <UpdaterFunction />
        <UpdateCarState /> 
        <UpdateArrayState />
        <AddRemoveCarState />
        <ToDoList/>
        <UseEffect/>
        <DigitalClock />
        <UseContext />
        <UseReffConcept />
        <StopWatch />
        <StopWatch />
        <StopWatch />

        </>
    );


}

export default App
