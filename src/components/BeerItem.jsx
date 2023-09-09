import React, { useState } from 'react';

export function BeerItem({ beer }) {
  const [contracted, setContracted] = useState(true);
  const [description, setDescription] = useState((contracted) ? beer.description.slice(0, 110) : beer.description);

  return (<div key={beer.id} className='item w-fit p-5 flex flex-col gap-5 justify-center items-center rounded-xl border-2 hover:bg-red-500 transition-all duration-200 hover:text-white'>
    <div className='item__image w-[15%] h-fit'>
      <img className='hover:scale-105 transition-all duration-200' src={beer.image_url} alt={beer.name} />
    </div>
    <div className='item__content flex flex-col gap-[2rem] p-5 justify-between w-[100%]  items-center'>
      <div className='flex flex-col justify-center items-center w-fit'>
        <h2 className='item__content__name text-3xl font-bold  text-center'>{beer.name.trim()}</h2>
        <p className='item__content__tagline text-center mt-2'>{beer.tagline.trim()}</p>
      </div>
      <p className='item__content__description w-[80%] text-center'>
        {description}
        <span className='mx-1 text-2xl font-bold cursor-pointer' onClick={() => {
          setDescription(() => {
            if (contracted) {
              setContracted(!contracted);
              return beer.description;
            } else {
              setContracted(!contracted);
              return beer.description.slice(0, 110);
            }

          });
        }}>
          ...
        </span>
      </p>
    </div>
  </div>);
}
