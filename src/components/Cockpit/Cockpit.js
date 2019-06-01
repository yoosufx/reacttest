import React from 'react'
import styleClasses from './Cockpit.module.css';

const cockpit = (props) => {

    let btnClasses = '';
    if(props.showPersons)
    {
      btnClasses = styleClasses.Red;
    }

    return (
        <div className={styleClasses.Cockpit}>
            <h1>Hi, I'm a React App On Steroids!</h1>
            <button className={btnClasses} onClick={props.togglePersonsHandler}>Click Me!</button>
        </div>
    );

};

export default cockpit;