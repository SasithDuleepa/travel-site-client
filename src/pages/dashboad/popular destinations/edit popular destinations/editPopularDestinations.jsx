import React, { useEffect, useState } from 'react';
import './editPopularDestinations.css'
import axios from 'axios';
import Delete from './../../../assets/icons/delete.png'

export default function EditPopularDestinations() {


  //get all popular destinations
  const[popularPlaces, setPopularPlaces] = useState([])
  const PopularDestinations =async () =>{
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/popular/place`)
    setPopularPlaces(res.data)
  }


  useEffect(()=>{
    PopularDestinations()
  },[])


  const DeleteHandler =(index) =>{

    const newdata = [...popularPlaces]
    newdata.splice(index,1)
    setPopularPlaces(newdata)
  
  }
  const UpdateHandler =async() =>{
    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/popular/update`,popularPlaces,{
        headers: {
          'Authorization': `${token}`,
        },
        withCredentials: true,
      }) 
      if (res.status === 200) {
        window.alert("popular places update successful!");
        PopularDestinations()
      }

    } catch (error) {
      if(error.response.status === 401){
        sessionStorage.clear();
        window.alert("You are not authorized to perform this action");
      }else if(error.response.status === 400){
        window.alert("All fields are required");
      }else if(error.response.status === 500){
        window.alert("Internal server error");
      }else{
        window.alert("popular places update unsuccessful!");
      }
    }
  }
  return (
    <div className='PopularDestinations'>
      <div  className='PopularDestinations-main'>
      <h1 className='PopularDestinations-header'>EDIT POPULAR DESTINATIONS</h1>
        <div className='PopularDestinations-line'></div>
        <div className='PopularDestinations-form-div'>

                       


            <div className='PopularDestinations-update-div'>
              <h1>Available Popular Places</h1>
            {popularPlaces.length >0 ? popularPlaces.map((place, index)=>{
                return(
                  <div className='PopularDestinations-result-place-div' key={index}>
                    <p>{place.place_name}</p>
                    <img className='dashboad-popular-delete-img' src={Delete} alt="delete" onClick={()=>DeleteHandler(index)}/>
                  </div>
                )
              
              }
              ):
              <p>No result</p>
            }

            </div>
            <button className='dashboad-popular-delete-btn'  onClick={()=>UpdateHandler()}>Update</button>

        </div>

      </div>
        
    </div>
  )
}

