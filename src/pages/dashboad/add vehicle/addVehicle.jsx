import React, { useEffect } from 'react';
import './addVehicle.css'
import axios from 'axios';
import { useState } from 'react';




export default function AddVehicals() {

  const[AllVehicles, setAllVehicles] = useState([]);


  const [data,setData] = useState({
    vehicleType:"",
    minPassengers:"",
    maxPassengers:"",
    ratePerKm:"",

    })

  const InputHandler = (e) => {
    let key = e.target.id;
    const newData = {...data};
    newData[key] = e.target.value;
    setData(newData);    
  }

  const AddHandler = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const res = await axios.post( `${process.env.REACT_APP_BACKEND_URL}/vehicles/add`, data,{
        headers: {
          'Authorization': `${token}`,
        },
        withCredentials: true,
      });
      if (res.status === 200) {
        window.alert("added successfully");
        window.location.reload();

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
        window.alert("Error ");
      }
    }
    

  }

  //get all vehicles
useEffect(() => {
  const AllVehicles = async () => {
    const res = await axios.get( `${process.env.REACT_APP_BACKEND_URL}/vehicles/all`);
    setAllVehicles(res.data);
  
  }
  AllVehicles();
},[])

const ChangeHandler = (e, index) => {
  let key = e.target.id;
  const newData = [...AllVehicles];
  newData[index][key] = e.target.value;
  setAllVehicles(newData);
}

const UpdateHandler =async(id,index)=>  {
  
  try {
    const token = sessionStorage.getItem("token");
    const res = await axios.put( `${process.env.REACT_APP_BACKEND_URL}/vehicles/update/${id}`, AllVehicles[index],{
      headers: {
        'Authorization': `${token}`,
      },
      withCredentials: true,
    });
    if (res.status === 200) {
      window.alert("successfully");
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
      window.alert("Error");
    }
  }
}

const DeleteHandler = async (id) => {
  try {
    const token = sessionStorage.getItem("token");
    const res = await axios.delete( `${process.env.REACT_APP_BACKEND_URL}/vehicles/delete/${id}`,{
      headers: {
        'Authorization': `${token}`,
      },
      withCredentials: true,
    });
    if (res.status === 200) {
      window.alert("successfully");
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
      window.alert("Error");
    }
  }

}

  return (
    <div className='vehical-main'>
      <h1>Add Vehicle</h1>
      <div className='vehical-main-div'>
        <div className='vehicle-main-form'>
          <label>vehicle type :</label>
          <input type='text' value={data.vehicleType} id='vehicleType' onChange={(e)=>InputHandler(e)}/>
        </div>
        <div className='vehicle-main-form'>
          <label>min passengers :</label>
          <input type='number' value={data.minPassengers} id='minPassengers' onChange={(e)=>InputHandler(e)}/>
        </div>
        <div className='vehicle-main-form'>
          <label>max passengers :</label>
          <input type='number' value={data.maxPassengers} id='maxPassengers' onChange={(e)=>InputHandler(e)}/>
        </div>
        <div className='vehicle-main-form'>
          <label>rate per km :</label>
          <input type='number' value={data.ratePerKm} id='ratePerKm' onChange={(e)=>InputHandler(e)}/>
        </div>
        {/* <div className='vehicle-main-form'>
          <label>rate per km (day tour):</label>
          <input type='number' value={data.ratePerKm} id='ratePerKm' onChange={(e)=>InputHandler(e)}/>
        </div> */}
        <button className='add-vehicle-btn' onClick={AddHandler}>Add</button>
      </div>



    </div>
  )
}
