import React from 'react'

const Card = ({job})=>{
  

    return(
        
                <div className='card'>
                <h2>{job.company}</h2>
                <p>Title: {job.title}</p>
                <p>Duration: {job.duration}</p>
                <p><strong>Tasks:</strong> {job.duties}</p>
                
            </div>
      
    )
}

export default Card