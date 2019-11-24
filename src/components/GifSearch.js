import React from 'react'

export default function GifSearch({onSubmit, query, handleChange}) { 
    return ( 
        <form onSubmit= {onSubmit}>
      <input name="query" value={query} onChange={handleChange}></input>
        </form>
    )
}