import React from 'react';
import Card from './Card';

function Cards({infoData}) {
  return (
    <div>
        {
            infoData ? infoData.map(card =>{
                return(
                    <div key={card.id}>
                        <Card 
                        image={card.thumbnail} 
                        name={card.title}
                        price={card.price}
                        />
                    </div>
                )
            }) : null 
        }
        
    </div>
  )
}

export default Cards