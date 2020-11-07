import React from 'react';
import image from '../images/IMG_20190513_091734.jpg'
import {Card,CardImg,CardText} from 'reactstrap'


const Home =()=>{

    return(
        
        <Card>
             <h1>Welcome to<span> Mohamed's Portfolio </span></h1>
            <CardText> I am computer savvy and a website developer. I have the skills and the knowledge to performe any IT work related. 
                Currently I am learning the software skills; I want to grow and expand my knowledge so I will be a software Engineer.
            </CardText>
        <CardImg src= {image} alt='' width= '400px'/>
        
        
            
            
      
           </Card>
             
       
    )
}
export default Home