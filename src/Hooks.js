import React, { useState, useEffect } from 'react';
import {Skeleton} from "@material-ui/lab"

export default function Hooks(props) {
    const [loading,setLoading] = useState(true)
    
    const { classes, url } = props;
    let [clicks, setClicks] = useState(0);
    
    useEffect ( ()=>{
        setTimeout(() =>{
        
        setLoading(false);
    }, 5000  );
    }, []  );
   
    const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 1);
    }
    return (
        <div className = "App">{loading? <Skeleton animation="wave" width = {1300} height = {850} /> : <div>
            <p>Done loading</p>
            <p>click count:{clicks}</p>
        <button onClick={doSomething} data-something="Default">
            Default</button></div>}
        </div>
    );
}
