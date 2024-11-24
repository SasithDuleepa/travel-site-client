import React from 'react';

import AdminPanelMainComponent from '../../../components/admin panel main component/adminPanelMainComponent';

import AddHotels from './add Hotel/addHotels';
import Edite_hotel from './edite hotel/edite_hotel';


export default function Hotel() {
  return (
    <div>
        <AdminPanelMainComponent
        component1BtnName = "ADD HOTEL"
        component1 = {<AddHotels/>}
        component2BtnName = "UPDATE HOTEL"
        component2 = {<Edite_hotel/>}
        />
    </div>

  )




}


