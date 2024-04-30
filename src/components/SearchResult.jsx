import React from 'react'
import './Styles.css'

const SearchResult = ({result}) => {
  return (
    <div className='search-result' onClick={(e)=>alert(`${result.firstName} ${result.lastName}`)}>{`${result.firstName} ${result.lastName}`}</div>
  )
}

export default SearchResult