import React from 'react';

import AdminPanelMainComponent from '../../../components/admin panel main component/adminPanelMainComponent';

import AddTours from './add tours/addTours';
import TourEdite from './edite tour/tourEdite';

export default function Place() {
  return (
    <div>
        <AdminPanelMainComponent
        component1BtnName = "ADD TOURS"
        component1 = {<AddTours/>}
        component2BtnName = "UPDATE TOURS"
        component2 = {<TourEdite/>}
        />
    </div>

  )




}


