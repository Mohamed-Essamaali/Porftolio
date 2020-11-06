import React, { useState } from 'react'
import emailjs from 'emailjs-com';


const initialState = {
    
    user_name:'',
    user_email:'',
    message:'',
    subject:''
    
}



const Contact=()=> {

  
   // subject: subject,

    const[contact,setContact]= useState(initialState)
    const handleChange = e=>{

        setContact({...contact,[e.target.name]:e.target.value})
        console.log(contact)

    }
   


    function sendEmail(e) {
      e.preventDefault();

      let templateParams = {
        to_name: 'Mohamed',
        from_email: contact.user_email,
        from_name: contact.user_name,
        reply_to: contact.user_email,
        message: contact.message,
        subject: contact.subject
    
    }
  
      emailjs.send('service_7ibtrd1', 'template_od6wl7p', templateParams, 'user_6hSZh4gTdOK8cKtgEeymj')
        .then((result) => {
            console.log('form data',contact)

            //reset form
            setContact(initialState)
            console.log('response ',result);
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
    <div className='contact-form'>
        <h1>Customized Contact Form</h1>
      <form className="contact-form" onSubmit={sendEmail}>
     
        <label>Name</label>
        <input type="text" name="user_name" value={contact.user_name} onChange={handleChange} />
        <label>Subject</label>
        <input type="text" name="subject" value={contact.subject} onChange={handleChange} />
        <label>Email</label>
        <input type="email" name="user_email" value={contact.user_email} onChange={handleChange}/>
        <label>Message</label>
        <textarea name="message"  value={contact.message} onChange={handleChange}/>
        <button type='submit'> Send</button>
      </form>
      </div>
    );
  }
  export default Contact




