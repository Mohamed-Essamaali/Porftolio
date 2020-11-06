import React, { useState } from 'react'
import { experiences } from '../data'
import Card from './card'

const Experiences =()=>{
    const[jobs,setJobs]=useState(experiences)

    return(
        <div className='exp-container'>
              <h1>Working Experiences</h1>
            <div className='experiences'>
          
            {experiences.map(job=>{
                return <Card job={job}/>
            })}
            

        </div>
        </div>
        
    )
}
export default Experiences