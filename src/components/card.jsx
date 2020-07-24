import React from 'react'

function Card(props){
    return(
        <div className='robotCard YouSeeThisCard YouDontSeeThisCard'>
            <img alt="robot" src={props.image} />
            <h3> {props.name }</h3>
            <p> {props.email} </p>
        </div>
    )

}

export default Card