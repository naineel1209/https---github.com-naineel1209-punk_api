import React, { useState } from 'react'
import { BeerItem } from './BeerItem';

const BeerDataList = ({ beerData }) => {
  const sample = beerData[0];

  if (!sample) {
    return <>
    </>;
  }

  if (beerData.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center relative'>
        <h1 className='text-3xl font-bold my-[2rem]'>No Results Found</h1>
      </div>
    )
  }

  return (
    <>
      <div className=' border-black grid grid-cols-3 gap-5 p-5'>
        {
          beerData.map((beer, index) => {
            return (<BeerItem key={beer.id} beer={beer} />)
          })
        }
      </div>
    </>
  )
}


export default BeerDataList 