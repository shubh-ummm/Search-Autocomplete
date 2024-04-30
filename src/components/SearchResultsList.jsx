import React from 'react'
import SearchResult from './SearchResult'
import './Styles.css'


const SearchResultsList = ({results}) => {
  return (
    <div className='results-list'>
      {results.map((result)=>{
        return <SearchResult result={result}/>
      })}
    </div>
  )
}

export default SearchResultsList