import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    const CardComponent = robots.map((robot,i) => {
            return(
             <Card key={i} 
                name = {robots[i].name}
                email = {robots[i].email}
                id = {robots[i].id} />
            );
        });
    return(
    <div className='robots-container'>
        {CardComponent}
    </div>
    );
}

export default CardList;
