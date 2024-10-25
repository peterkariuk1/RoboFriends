import React from 'react';

const Card = ({name,id,email}) => {
    return(
    <div className='robot-card'>
        <img alt='Robo' src={`https://robohash.org/robot${id}`}/>
        <h2>{name}</h2>
        <p>{email}</p>  
    </div>
    );
}

export default Card;