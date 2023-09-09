import React, { useState } from 'react'
import { BeerItem } from './BeerItem';

const BeerDataList = ({ beerData }) => {
  const sample = beerData[0];

  if (!sample) {
    return <>
    </>;
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