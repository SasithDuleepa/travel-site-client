import React, { useState } from 'react';
import './homeheader.css';
import axios from 'axios';







export default function Homeheader() {

  const[name , setName] = useState('');
  const[email , setEmail] = useState('');
  const[contact , setContact] = useState('');
  const[country , setCountry] = useState('');

  const SendHandler =async() =>{
    if(name!=='' && email!=='' && contact!=='' && country!==''){
      const data ={
        name:name,
        email:email,
        contact:contact,
        country:country,
      }
      try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/request/add`,data)
        console.log(res.data)
        window.alert('Request Sent Successfully!')
        setName('')
        setEmail('')
        setContact('')
        setCountry('')
        
      } catch (error) {
        window.alert('please try again!')
      }
      ;
    }

  }
  return (
    <div className='home-header-main'>
      <div className="pic-wrapper">

        





        <div className='home-header-main-sub2'>
          <p className='homeheader-input-title'>Plan your Best tour with Sri Lanka Travel Expert</p>
          <div className='homeheader-input-div'>
          <input className='homeheader-input-1' type='text' placeholder='Your Name' onChange={(e)=>setName(e.target.value)} value={name}/>
          <p className='home-header-input-line'></p>
          <input className='homeheader-input-1 ' type='email' placeholder='Your Mail' onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <p className='home-header-input-line'></p>
          <input className='homeheader-input-1 ' type='contact' placeholder='Contact Number' onChange={(e)=>setContact(e.target.value)} value={contact}/>
          <p className='home-header-input-line'></p>
          <input className='homeheader-input-1 ' type='text' placeholder='Your Country' onChange={(e)=>setCountry(e.target.value)} value={country}/>
          <a onClick={SendHandler} className='homeheader-input-btn'>Plan Your Tour</a>
          </div>
          
          
        </div>
  <div className='figure  pic-1 layer' >
  <div className='home-header-text-sub'>
          <p className='home-header-main-text-1'>header main title 1</p>
          <p className='home-header-main-text-2'>sub title 1</p>
          
        </div>
  </div>
  <div className='figure  pic-2 layer' >
  <div className='home-header-text-sub'>
  <p className='home-header-main-text-1'>header main title 2</p>
  <p className='home-header-main-text-2'>sub title 2</p>
          
        </div>
  </div>
  <div className='figure  pic-3 layer' >
  <div className='home-header-text-sub'>
  <p className='home-header-main-text-1'>header main title 3</p>
  <p className='home-header-main-text-2'>sub title 3</p>
          
        </div>
  </div>
  <div className='figure  pic-4 layer' >
  <div className='home-header-text-sub'>
  <p className='home-header-main-text-1'>header main title 4</p>
  <p className='home-header-main-text-2'>sub title 4</p>
          
        </div>
  </div>
</div>
        
      
    </div>
  )
}
