import React from 'react'
import {useHistory} from 'react-router-dom'


export default function DiscriptionTrailer({match ,res}) {
   
   const history = useHistory();
   const film = res.find(el => el.name == match.params.name)
   if(film)
    return (
        <div>
       
            <h1>{film.description}</h1>
        <div>
            <iframe width="560" height="315" src={film.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
        </div>
    )
}