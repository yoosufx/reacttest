import React from 'react';
import styleClasses from './Person.module.css'

const person = (props) => {
    return (
        <div className={styleClasses.Person}>
            <p onClick={props.click}>My name is {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.namechange} value={props.name}/>
        </div>
    )
}

export default person;