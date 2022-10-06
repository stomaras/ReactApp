import React from 'react';
import './Card.css';

function Card(props){
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}


export default Card;

// on props children will be available what is inside Card COmpoent