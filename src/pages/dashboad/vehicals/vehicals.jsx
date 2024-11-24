import React from 'react';

import AdminPanelMainComponent from '../../../components/admin panel main component/adminPanelMainComponent';

import AddVehicals from '../add vehicle/addVehicle';
import EditVehicals from '../edit vehicle/editVehicle';

export default function Place() {
  return (
    <div>
        <AdminPanelMainComponent
        component1BtnName = "ADD VEHICLE"
        component1 = {<AddVehicals/>}
        component2BtnName = "UPDATE VEHICLE"
        component2 = {<EditVehicals/>}
        />
    </div>

  )




}


