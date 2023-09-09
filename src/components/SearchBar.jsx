import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const ref = React.useRef(null);

  return (
    <div>
      <input ref={ref} className='border-2 px-5 py-2 rounded-lg rounded-r-none accent-black mx-1' type="text" />

      <button className='border-2 px-5 py-2 accent-black hover:text-white hover:bg-black duration-200 transition-all mx-1' onClick={() => setSearchTerm(ref.current.value)}>Search</button>

      <button className='border-2 px-5 py-2 rounded-lg rounded-l-none accent-black hover:text-white hover:bg-black duration-200 transition-all mx-1' onClick={() => {
        ref.current.value = '';
      }}>Clear</button>
    </div>
  )
}

export default SearchBar