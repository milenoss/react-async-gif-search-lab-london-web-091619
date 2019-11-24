import React from 'react'
export default function GifList({gifs}) { 
    return ( 
        <ul> 
            {gifs.map(gif => (
                <img key ={gif.id} alt ='gif' src={gif.images.original.url}/>
            ))}
        </ul>
    )
}